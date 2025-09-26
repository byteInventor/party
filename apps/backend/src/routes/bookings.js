const express = require('express');
const bookingController = require('../controllers/bookingController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(authenticate);
router.post('/', authorize('consumer', 'admin', 'staff'), bookingController.createBooking);
router.get('/me', authorize('consumer', 'admin', 'staff'), bookingController.listMyBookings);
router.get('/', authorize('admin', 'staff'), bookingController.listAllBookings);
router.patch('/:id', authorize('admin', 'staff'), bookingController.updateBookingStatus);

module.exports = router;
