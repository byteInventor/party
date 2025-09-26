const express = require('express');
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.post('/request-otp', authController.requestOtp);
router.post('/verify-otp', authController.verifyOtpCode);
router.post('/login', authController.loginWithPassword);
router.post('/refresh', authController.refreshTokens);
router.post('/update-password', authenticate, authController.updatePassword);

module.exports = router;
