const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Booking = sequelize.define(
    'Booking',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      eventId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      eventDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
        defaultValue: 'pending',
      },
      guestCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      venuePreferences: {
        type: DataTypes.JSONB,
      },
      addOnSelections: {
        type: DataTypes.JSONB,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0,
      },
      paymentStatus: {
        type: DataTypes.ENUM('pending', 'paid', 'refunded', 'failed'),
        defaultValue: 'pending',
      },
      notes: {
        type: DataTypes.TEXT,
      },
      razorpayOrderId: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'bookings',
      underscored: true,
    }
  );

  return Booking;
};
