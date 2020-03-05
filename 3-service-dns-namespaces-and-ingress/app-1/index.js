const express = require('express')
const app = express()
require('dotenv').config()
const config = require('config')

app.get('/', (req, res) => res.send('Application 1 - CV Express App'))
app.listen(config.port, () => {
  console.log('App 1 listening on port:', config.port)
})
