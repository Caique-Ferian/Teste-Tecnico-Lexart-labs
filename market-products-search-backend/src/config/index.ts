export default () => ({
  port: +process.env.APP_PORT || 3001,
  databaseUrl: process.env.DATABASE_URL || 'file:./dev.db',
});
