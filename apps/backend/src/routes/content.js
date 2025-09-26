const express = require('express');
const contentController = require('../controllers/contentController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', contentController.listContent);
router.post('/', authenticate, authorize('admin', 'staff'), contentController.createContent);
router.put('/:id', authenticate, authorize('admin', 'staff'), contentController.updateContent);
router.delete('/:id', authenticate, authorize('admin'), contentController.deleteContent);

module.exports = router;
