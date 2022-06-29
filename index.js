const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('Good bye!')
  })

app.listen(port, () => { // REMOVE-ON-DEPLOY
  console.log(`Example app listening on port ${port}`) // REMOVE-ON-DEPLOY
}) // REMOVE-ON-DEPLOY

module.exports = app