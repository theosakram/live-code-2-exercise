const { Pool } = require('pg')
const pool = new Pool({
  user: 'theosakram',
  host: 'localhost',
  database: 'gacha1',
  password: 'pgpw',
  port: 5432,
})

module.exports = pool