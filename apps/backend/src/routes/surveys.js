const express = require('express');
const surveyController = require('../controllers/surveyController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', surveyController.listSurveys);
router.get('/:id/responses', authenticate, authorize('admin', 'staff'), surveyController.listResponses);
router.post('/', authenticate, authorize('admin', 'staff'), surveyController.createSurvey);
router.put('/:id', authenticate, authorize('admin', 'staff'), surveyController.updateSurvey);
router.delete('/:id', authenticate, authorize('admin'), surveyController.deleteSurvey);
router.post('/:id/responses', authenticate, surveyController.submitSurveyResponse);

module.exports = router;
