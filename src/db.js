const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'shuttle.proxy.rlwy.net',
  database: 'railway',
  password: 'cfvPgXOeFlUQzWjRpXvLzDXcVOjksJcE',
  port: 56858,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
