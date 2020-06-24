const pool = require('./config/connection')
const fs = require('fs')

let heroData = JSON.parse(fs.readFileSync('gacha.json', 'utf-8')).map(x => `('${x.first_name}', '${x.last_name}', '${x.job}', '${x.role}')`).join(',')
let insertion = `
INSERT INTO "Heroes" ("first_name", "last_name", "job", "role")
VALUES ${heroData}`;

pool.query(insertion, (err, res) => {
  if (err) res.send(err.message)
  else console.log('Data inserted successfully')
})