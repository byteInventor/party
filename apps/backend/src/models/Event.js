const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Event = sequelize.define(
    'Event',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(160),
        unique: true,
        allowNull: false,
      },
      themeType: {
        type: DataTypes.STRING(80),
      },
      heroImage: {
        type: DataTypes.STRING,
      },
      gallery: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      description: {
        type: DataTypes.TEXT,
      },
      inclusions: {
        type: DataTypes.JSONB,
      },
      basePrice: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0,
      },
      location: {
        type: DataTypes.STRING(120),
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      metadata: {
        type: DataTypes.JSONB,
      },
    },
    {
      tableName: 'events',
      underscored: true,
    }
  );

  return Event;
};
