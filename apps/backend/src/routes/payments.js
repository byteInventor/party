const express = require('express');
const paymentController = require('../controllers/paymentController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(authenticate);
router.post('/create-order', authorize('consumer', 'admin', 'staff'), paymentController.createOrder);
router.post('/confirm', authorize('admin', 'staff'), paymentController.confirmPayment);
router.get('/', authorize('admin', 'staff'), paymentController.listPayments);

module.exports = router;
