const { Pool } = require('pg');

const pool = new Pool({
  database: 'jennie-dash',
  user: 'jenniezeng',
  port: 5432,
});

pool.connect();

module.exports = pool;
