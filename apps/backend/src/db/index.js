const { Sequelize } = require('sequelize');
const config = require('../config/env');
const logger = require('../logger');

const buildSequelize = () => {
  if (config.database.url) {
    return new Sequelize(config.database.url, {
      logging: config.database.logging ? (msg) => logger.debug(msg) : false,
      dialect: 'postgres',
    });
  }

  return new Sequelize(
    config.database.database,
    config.database.username,
    config.database.password,
    {
      host: config.database.host,
      port: config.database.port,
      dialect: 'postgres',
      logging: config.database.logging ? (msg) => logger.debug(msg) : false,
    }
  );
};

const sequelize = buildSequelize();

module.exports = sequelize;
