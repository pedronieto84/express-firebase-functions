const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('hola')
  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    console.log('adios')
    res.send('Adios')
  })


module.exports = app
