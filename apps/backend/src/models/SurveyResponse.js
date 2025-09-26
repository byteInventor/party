const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'SurveyResponse',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      surveyId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
      },
      answers: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      submittedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'survey_responses',
      underscored: true,
    }
  );
