const express = require('express');
const customerController = require('../controllers/customerController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(authenticate, authorize('admin', 'staff'));
router.get('/', customerController.listCustomers);
router.get('/:id', customerController.getCustomer);

module.exports = router;
