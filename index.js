const express = require('express')
const path = require('path')
const { mainPage, aboutPage } = require('./controllers/main.js')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', mainPage)
app.get('/aboutme', aboutmePage)

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
