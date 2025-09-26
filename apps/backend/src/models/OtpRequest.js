const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'OtpRequest',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      mobileNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      consumedAt: {
        type: DataTypes.DATE,
      },
      attemptCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      context: {
        type: DataTypes.STRING(30),
        defaultValue: 'login',
      },
    },
    {
      tableName: 'otp_requests',
      underscored: true,
      indexes: [
        { fields: ['mobile_number'] },
        { fields: ['expires_at'] },
      ],
    }
  );
