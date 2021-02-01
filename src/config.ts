export default {
  API_PORT: process.env['API_PORT'] || 8080,
  API_KEY: process.env['API_KEY'] as string,
  BASE_URL: process.env['BASE_URL'] as string,
};
