const { verifyAccessToken } = require('../utils/jwt');
const { User } = require('../models');

const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.substring(7) : null;

    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }

    const payload = verifyAccessToken(token);
    const user = await User.findByPk(payload.sub);

    if (!user || user.status !== 'active') {
      return res.status(401).json({ message: 'User inactive or missing' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

const authorize = (...roles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  return next();
};

module.exports = {
  authenticate,
  authorize,
};
