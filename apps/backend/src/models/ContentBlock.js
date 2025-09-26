const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'ContentBlock',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM('about', 'testimonial', 'gallery', 'hero', 'faq', 'custom'),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(180),
      },
      body: {
        type: DataTypes.TEXT,
      },
      media: {
        type: DataTypes.JSONB,
      },
      sortOrder: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      isPublished: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      metadata: {
        type: DataTypes.JSONB,
      },
    },
    {
      tableName: 'content_blocks',
      underscored: true,
    }
  );
