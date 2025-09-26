const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      mobileNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.ENUM('consumer', 'admin', 'staff'),
        allowNull: false,
        defaultValue: 'consumer',
      },
      passwordHash: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive', 'blocked'),
        defaultValue: 'active',
      },
      lastLoginAt: {
        type: DataTypes.DATE,
      },
      metadata: {
        type: DataTypes.JSONB,
      },
    },
    {
      tableName: 'users',
      underscored: true,
      indexes: [
        { fields: ['mobile_number'] },
        { fields: ['email'] },
      ],
    }
  );

  User.prototype.validatePassword = function validatePassword(plain) {
    if (!this.passwordHash) return false;
    return bcrypt.compare(plain, this.passwordHash);
  };

  return User;
};
