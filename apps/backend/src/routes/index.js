const express = require('express');
const authRoutes = require('./auth');
const eventRoutes = require('./events');
const bookingRoutes = require('./bookings');
const paymentRoutes = require('./payments');
const contentRoutes = require('./content');
const surveyRoutes = require('./surveys');
const reportRoutes = require('./reports');
const customerRoutes = require('./customers');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/events', eventRoutes);
router.use('/bookings', bookingRoutes);
router.use('/payments', paymentRoutes);
router.use('/content', contentRoutes);
router.use('/surveys', surveyRoutes);
router.use('/reports', reportRoutes);
router.use('/customers', customerRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend' });
});

module.exports = router;
