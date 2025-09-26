const sequelize = require('../db');
const User = require('./User')(sequelize);
const Event = require('./Event')(sequelize);
const EventAddon = require('./EventAddon')(sequelize);
const Booking = require('./Booking')(sequelize);
const Payment = require('./Payment')(sequelize);
const Survey = require('./Survey')(sequelize);
const SurveyResponse = require('./SurveyResponse')(sequelize);
const ContentBlock = require('./ContentBlock')(sequelize);
const OtpRequest = require('./OtpRequest')(sequelize);

User.hasMany(Booking, { foreignKey: 'userId', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Event.hasMany(EventAddon, { foreignKey: 'eventId', as: 'addons', onDelete: 'CASCADE' });
EventAddon.belongsTo(Event, { foreignKey: 'eventId', as: 'event' });

Event.hasMany(Booking, { foreignKey: 'eventId', as: 'bookings' });
Booking.belongsTo(Event, { foreignKey: 'eventId', as: 'event' });

Booking.hasMany(Payment, { foreignKey: 'bookingId', as: 'payments' });
Payment.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });

Survey.hasMany(SurveyResponse, { foreignKey: 'surveyId', as: 'responses' });
SurveyResponse.belongsTo(Survey, { foreignKey: 'surveyId', as: 'survey' });

User.hasMany(SurveyResponse, { foreignKey: 'userId', as: 'surveyResponses' });
SurveyResponse.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  sequelize,
  Sequelize: sequelize,
  User,
  Event,
  EventAddon,
  Booking,
  Payment,
  Survey,
  SurveyResponse,
  ContentBlock,
  OtpRequest,
};
