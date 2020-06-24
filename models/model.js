const pool = require('../config/connection')

class Model {
  static read(cb) {
    let selection = `SELECT * FROM "Heroes";`;
    pool.query(selection, (err, res) => {
      if (err) cb(err, null)
      else cb(null, res.rows)
    })
  }

  static add(input, cb) {
    if (input.role === 'Choose...' || input.job == 'Choose...') {
      cb('Choose job and role', null)
    } else if (Boolean(input.first_name.trim()) == true && Boolean(input.last_name.trim()) == true) {
      let addition = `INSERT INTO "Heroes" ("first_name", "last_name", "job", "role")
      VALUES ($1, $2, $3, $4)`
      let values = [input.first_name, input.last_name, input.job, input.role]
      pool.query(addition, values, (err, res) => {
        if (err) cb(err, null)
        else cb(null, res.rows)
      })
    } else cb('Name cannot be empty strings', null)
  }

  static delete(param, cb) {
    let deletion = `DELETE FROM "Heroes"
    WHERE "id" = ${param}`
    pool.query(deletion, (err, res) => {
      if (err) cb(err, null)
      else cb(null, res.rows)
    })
  }

  static editForm(param, cb) {
    let selection = `SELECT * FROM "Heroes"
    WHERE "id" = ${param}`
    pool.query(selection, (err, res) => {
      if (err) cb(err, null)
      else cb(null, res.rows)
    })
  }

  static edit(input, param, cb) {
    if (input.role === 'Choose...' || input.job == 'Choose...') {
      cb('Choose job and role', null)
    } else if (Boolean(input.first_name.trim()) == true && Boolean(input.last_name.trim()) == true) {
      let edition = `UPDATE "Heroes"
      SET "first_name" = '${input.first_name}', "last_name" = '${input.last_name}',
       "job" = '${input.job}', "role" = '${input.role}'
       WHERE "id" = '${param}';`
      pool.query(edition, (err, res) => {
        if (err) cb(err, null)
        else cb(null, res.rows)
      })
    } else cb('Name cannot be empty strings', null)
  }
}

module.exports = Model