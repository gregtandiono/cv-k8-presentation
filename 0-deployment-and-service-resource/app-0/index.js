const express = require('express')
const app = express()
require('dotenv').config()
const config = require('config')

app.get('/', (req, res) => res.send('Application 0 - CV Express App'))
app.listen(config.port, () => {
  console.log('App 0 listening on port:', config.port)
})
