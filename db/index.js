const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'pw',
    database: 'gypfill',
})

module.exports = pool;