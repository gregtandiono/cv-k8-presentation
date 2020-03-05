const express = require('express')
const app = express()
require('dotenv').config()
const config = require('config')

app.get('/', (req, res) => res.send('Application 2 - CV Express App'))
app.get('/status', (req, res) => {
  res.send('OK 200')
})
app.listen(config.port, () => {
  console.log('App 2 listening on port:', config.port)
})
