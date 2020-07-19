
const path = require('path')
const express = require('express')

const app = express()

app.set('view engine','hbs')

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    content: 'Douglas'
  })
})


app.get('/about', (req, res) => {

  res.render('about', {
    title: 'About me',
    content: 'Douglas'
  })
})

app.get('/help', (req, res) => {

  res.render('help', {
    title: 'Help',
    content: 'Helpful text'
  })
})


app.get('/weather', (req, res) => {
    res.send({
      forecast: '',
      location: ''
    })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
