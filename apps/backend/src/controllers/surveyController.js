const { Survey, SurveyResponse } = require('../models');

const listSurveys = async (req, res) => {
  const where = req.query.includeInactive === 'true' ? {} : { isActive: true };
  const surveys = await Survey.findAll({ where, order: [['created_at', 'DESC']] });
  res.json(surveys);
};

const createSurvey = async (req, res) => {
  const survey = await Survey.create(req.body);
  res.status(201).json(survey);
};

const updateSurvey = async (req, res) => {
  const survey = await Survey.findByPk(req.params.id);
  if (!survey) return res.status(404).json({ message: 'Survey not found' });
  await survey.update(req.body);
  res.json(survey);
};

const deleteSurvey = async (req, res) => {
  const survey = await Survey.findByPk(req.params.id);
  if (!survey) return res.status(404).json({ message: 'Survey not found' });
  await survey.destroy();
  res.status(204).send();
};

const submitSurveyResponse = async (req, res) => {
  const survey = await Survey.findByPk(req.params.id);
  if (!survey || !survey.isActive) {
    return res.status(404).json({ message: 'Survey not found' });
  }

  const response = await SurveyResponse.create({
    surveyId: survey.id,
    userId: req.user ? req.user.id : null,
    answers: req.body.answers,
  });

  res.status(201).json(response);
};

const listResponses = async (req, res) => {
  const responses = await SurveyResponse.findAll({ where: { surveyId: req.params.id } });
  res.json(responses);
};

module.exports = {
  listSurveys,
  createSurvey,
  updateSurvey,
  deleteSurvey,
  submitSurveyResponse,
  listResponses,
};
