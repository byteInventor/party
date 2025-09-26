const app = require('./app');
const config = require('./config/env');
const logger = require('./logger');
const { sequelize } = require('./models');

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(config.port, () => {
      logger.info(`Backend running at http://localhost:${config.port}`);
    });
  } catch (error) {
    logger.error('Unable to start server: %s', error.message);
    process.exit(1);
  }
};

start();
