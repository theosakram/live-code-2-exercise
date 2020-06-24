const route = require('express').Router()
const CommandCenter = require('../controllers/commandCenter')

route.get('/add', CommandCenter.addForm)
route.post('/add', CommandCenter.add)
route.get('/delete/:id', CommandCenter.delete)
route.get('/edit/:id', CommandCenter.editForm)
route.post('/edit/:id', CommandCenter.edit)

module.exports = route