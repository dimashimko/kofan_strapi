module.exports = ({ env }) => ({
  jwt: {
    secret: env('JWT_SECRET', 'my-secret'),
    expiresIn: '30d',
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

