const crypto = require('crypto');
const { Op } = require('sequelize');
const config = require('../config/env');
const { OtpRequest } = require('../models');

const generateOtp = () => crypto.randomInt(100000, 999999).toString();

const createOtpRequest = async ({ mobileNumber, context = 'login' }) => {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + config.otp.expiryMinutes * 60 * 1000);
  const code = generateOtp();

  const otp = await OtpRequest.create({
    mobileNumber,
    code,
    context,
    expiresAt,
  });

  return otp;
};

const verifyOtp = async ({ mobileNumber, code, context = 'login' }) => {
  const now = new Date();
  const otpRequest = await OtpRequest.findOne({
    where: {
      mobileNumber,
      context,
      expiresAt: { [Op.gt]: now },
      consumedAt: null,
    },
    order: [['createdAt', 'DESC']],
  });

  if (!otpRequest) return { valid: false, reason: 'not_found' };

  if (otpRequest.attemptCount >= config.otp.maxAttempts) {
    return { valid: false, reason: 'attempts_exceeded' };
  }

  if (otpRequest.code !== code) {
    await otpRequest.update({ attemptCount: otpRequest.attemptCount + 1 });
    return { valid: false, reason: 'invalid_code' };
  }

  await otpRequest.update({ consumedAt: now });
  return { valid: true, otpRequest };
};

const canResendOtp = async ({ mobileNumber, context = 'login' }) => {
  const since = new Date(Date.now() - config.otp.resendAfterSeconds * 1000);
  const recent = await OtpRequest.findOne({
    where: {
      mobileNumber,
      context,
      createdAt: { [Op.gt]: since },
    },
  });

  return !recent;
};

module.exports = {
  generateOtp,
  createOtpRequest,
  verifyOtp,
  canResendOtp,
};
