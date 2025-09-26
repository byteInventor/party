const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { User } = require('../models');
const config = require('../config/env');
const logger = require('../logger');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../utils/jwt');
const { createOtpRequest, verifyOtp, canResendOtp } = require('../utils/otp');

const maskMobile = (mobile) => `${mobile.slice(0, 2)}******${mobile.slice(-2)}`;

const requestOtp = async (req, res) => {
  const { mobileNumber } = req.body;
  if (!mobileNumber) {
    return res.status(400).json({ message: 'Mobile number is required' });
  }

  const canSend = await canResendOtp({ mobileNumber });
  if (!canSend) {
    return res.status(429).json({ message: 'OTP already sent. Please wait before requesting again.' });
  }

  const otp = await createOtpRequest({ mobileNumber });
  logger.info('Generated OTP %s for mobile %s', otp.code, maskMobile(mobileNumber));

  return res.json({
    message: 'OTP generated successfully',
    expiresIn: config.otp.expiryMinutes * 60,
    ...(config.env !== 'production' && { debugCode: otp.code }),
  });
};

const verifyOtpCode = async (req, res) => {
  const { mobileNumber, code, fullName } = req.body;

  if (!mobileNumber || !code) {
    return res.status(400).json({ message: 'Mobile number and code are required' });
  }

  const { valid, reason } = await verifyOtp({ mobileNumber, code });

  if (!valid) {
    const errorMessages = {
      not_found: 'OTP not found or expired',
      attempts_exceeded: 'Maximum attempts exceeded',
      invalid_code: 'Invalid OTP code',
    };

    return res.status(400).json({ message: errorMessages[reason] || 'OTP verification failed' });
  }

  const [user] = await User.findOrCreate({
    where: { mobileNumber },
    defaults: {
      fullName: fullName || 'Guest User',
      role: 'consumer',
    },
  });

  user.lastLoginAt = new Date();
  await user.save();

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshToken = signRefreshToken({ sub: user.id, role: user.role });

  return res.json({
    user,
    tokens: {
      accessToken,
      refreshToken,
      expiresIn: config.jwt.expiresIn,
    },
  });
};

const loginWithPassword = async (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ message: 'Identifier and password are required' });
  }

  const user = await User.findOne({
    where: {
      [Op.or]: [{ email: identifier }, { mobileNumber: identifier }],
    },
  });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const valid = await user.validatePassword(password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = signAccessToken({ sub: user.id, role: user.role });
  const refreshToken = signRefreshToken({ sub: user.id, role: user.role });

  return res.json({
    user,
    tokens: {
      accessToken,
      refreshToken,
      expiresIn: config.jwt.expiresIn,
    },
  });
};

const refreshTokens = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token required' });
  }

  try {
    const payload = verifyRefreshToken(refreshToken);
    const user = await User.findByPk(payload.sub);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const accessToken = signAccessToken({ sub: user.id, role: user.role });
    const newRefreshToken = signRefreshToken({ sub: user.id, role: user.role });

    return res.json({
      tokens: {
        accessToken,
        refreshToken: newRefreshToken,
        expiresIn: config.jwt.expiresIn,
      },
    });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
};

const updatePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!req.user) return res.status(401).json({ message: 'Unauthenticated' });

  if (req.user.passwordHash) {
    const match = await req.user.validatePassword(currentPassword || '');
    if (!match) {
      return res.status(400).json({ message: 'Current password incorrect' });
    }
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);
  req.user.passwordHash = hash;
  await req.user.save();

  return res.json({ message: 'Password updated successfully' });
};

module.exports = {
  requestOtp,
  verifyOtpCode,
  loginWithPassword,
  refreshTokens,
  updatePassword,
};
