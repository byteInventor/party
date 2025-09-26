const express = require('express');
const eventController = require('../controllers/eventController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', eventController.listEvents);
router.get('/:slug', eventController.getEvent);

router.post('/', authenticate, authorize('admin', 'staff'), eventController.createEvent);
router.put('/:id', authenticate, authorize('admin', 'staff'), eventController.updateEvent);
router.delete('/:id', authenticate, authorize('admin'), eventController.deleteEvent);

module.exports = router;
