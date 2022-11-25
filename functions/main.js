const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('hola')
  res.send('Hello World!')
})

app.get('/get', (req, res) => {
    console.log('adios')
    res.send({metodo: 'get'})
  })

  app.post('/post', (req, res) => {
    console.log('adios')
    const data = req.body
    res.send({data, method:'post'})
  })

module.exports = app
