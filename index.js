const express = require('express')
const app = express()
const port = 3000
const CommandCenter = require('./controllers/commandCenter')
const heroes = require('./router/route')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', CommandCenter.read)
app.use('/heroes', heroes)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})