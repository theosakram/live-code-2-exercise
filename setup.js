const pool = require('./config/connection')

let createHeroTable = `
  CREATE TABLE "Heroes"(
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "job" VARCHAR NOT NULL,
    "role" VARCHAR NOT NULL
  )`;

pool.query(createHeroTable, (err, res) => {
  if (err) res.send(err.message)
  else console.log('Table created successfully')
})