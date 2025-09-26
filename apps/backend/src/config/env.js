const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: process.env.BACKEND_ENV_FILE || path.resolve(process.cwd(), '.env') });

const required = (value, name) => {
  if (value === undefined || value === null || value === '') {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 4000,
  database: {
    url: process.env.DATABASE_URL,
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'luxury_events',
    logging: process.env.DB_LOGGING === 'true',
  },
  jwt: {
    secret: required(process.env.JWT_SECRET || 'local-dev-secret', 'JWT_SECRET'),
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshSecret: process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET || 'local-refresh-secret',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  },
  otp: {
    expiryMinutes: Number(process.env.OTP_EXPIRY_MINUTES) || 10,
    resendAfterSeconds: Number(process.env.OTP_RESEND_SECONDS) || 60,
    maxAttempts: Number(process.env.OTP_MAX_ATTEMPTS) || 5,
  },
};
