export default {
  API_PORT: process.env['API_PORT'] || 8080,
  API_KEY: process.env['API_KEY'] as string,
  BASE_URL: process.env['BASE_URL'] as string,
  SECRET_KEY: process.env['SECRET_KEY'] || 'secret',
  SESSION_NAME: process.env['SESSION_NAME'] || 'suid',
  DB_URI: process.env['DB_URI'] as string,
  NODE_ENV: process.env['NODE_ENV'] || 'development',
  SALT_ROUNDS: 12,
  REDIS_URL: process.env['REDIS_URL'] as string,
  CORS_ORIGIN_WHITELIST: process.env.CORS_ORIGIN_WHITELIST?.split(',') as string[]
};
