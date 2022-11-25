const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('hola')
  res.send('Api de usuarios!')
})
// Obtener todos los usuarios
app.get('/users', (req, res) => {
  console.log('adios')
  res.send('Adios')
})

// Crear un usuario
app.post('/user', (req, res) => {


  const user = req.body
  res.send({user})
})

// Obtener un usuario en concreto
app.get('/user/:id', async (req, res) => {
  const id = req.params.id
  const user = await db.collection('users').doc(id).get()
  res.send(`Get ${id} `)
})

// Updatear un usuario en concreto
app.put('/user/:id', async (req, res) => {
  const id = req.params.id
  const user = req.body
  const updateOperation = await db.collection('users').doc(id).update( user , { merge: true})
  res.send({updateOperation})
})

// Eliminar un usuario en concreto
app.delete('/user/:id', (req, res) => {
  const id = req.params.id
  
  res.send(`Delete${id} `)
})

  


module.exports = app
