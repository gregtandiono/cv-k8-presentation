const express = require('express')
const app = express()
require('dotenv').config()
const config = require('config')

app.get('/', (req, res) => res.send(`Application 0 - CV Express App - ${config.bootMessage} \n ${config.defaultResponse}`))
app.get('/get-secret-url', (req, res) => res.json({ url: config.secretURL }))
app.get('/status', (req, res) => {
  res.send(200)
})
app.listen(config.port, () => {
  console.log('App 0 listening on port:', config.port)
})
