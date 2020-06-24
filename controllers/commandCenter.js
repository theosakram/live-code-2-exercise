const Model = require('../models/model')

class CommandCenter {
  static read(req, res) {
    Model.read((err, data) => {
      if (err) res.send(err.message)
      else res.render('heroes', { data })
    })
  }

  static addForm(req, res) {
    res.render('addForm')
  }

  static add(req, res) {
    let input = req.body
    console.log(input)
    Model.add(input, (err, data) => {
      if (err) res.send(err)
      else res.redirect('/')
    })
  }

  static delete(req, res) {
    let param = req.params.id
    Model.delete(param, (err, data) => {
      if (err) res.send(err.message)
      else res.redirect('/')
    })
  }

  static editForm(req, res) {
    let param = req.params.id
    Model.editForm(param, (err, data) => {
      if (err) res.send(err.message)
      else res.render('editForm', { data })
    })
  }

  static edit(req, res) {
    let input = req.body, param = req.params.id
    Model.edit(input, param, (err, data) => {
      if (err) res.send(err.message)
      else res.redirect('/')
    })
  }
}

module.exports = CommandCenter