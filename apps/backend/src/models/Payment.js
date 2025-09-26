const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'Payment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      bookingId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING(60),
        defaultValue: 'razorpay',
      },
      providerOrderId: {
        type: DataTypes.STRING,
      },
      providerPaymentId: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING(3),
        defaultValue: 'INR',
      },
      status: {
        type: DataTypes.ENUM('created', 'authorized', 'captured', 'failed', 'refunded'),
        defaultValue: 'created',
      },
      paymentDate: {
        type: DataTypes.DATE,
      },
      metadata: {
        type: DataTypes.JSONB,
      },
    },
    {
      tableName: 'payments',
      underscored: true,
    }
  );
