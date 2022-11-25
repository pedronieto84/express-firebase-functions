const express = require('express')
const app = express()
const port = 3000

const admin = require("firebase-admin");
admin.initializeApp()
const db = admin.firestore()

app.get('/', (req, res) => {
    console.log('hola')
  res.send('Api de usuarios!')
})
// Obtener todos los usuarios
app.get('/users', async (req, res) => {
  const users = await db.collection('users').get()
  const objectsOfUsers = users.docs.map((d)=> {
    return {
      user: d.data(),
      id: d.id
    }
    
  })
  res.send(objectsOfUsers)
})

// Crear un usuario
app.post('/user', async (req, res) => {

  const user = req.body
  const id = await db.collection('users').add(user)
  res.send({user, id })
})

// Obtener un usuario en concreto
app.get('/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await db.collection('users').doc(id).get()
    res.send({user: user.data(), id: user.id})
})

// Updatear un usuario en concreto
app.put('/user/:id', async (req, res) => {
  const id = req.params.id
  const user = req.body
  const updateOperation = await db.collection('users').doc(id).update( user , { merge: true})
  res.send({updateOperation})
})

// Eliminar un usuario en concreto
app.delete('/user/:id', async (req, res) => {
  const id = req.params.id
  const deleteOperation = await db.collection('users').doc(id).delete()
  res.send({deleteOperation})
})

  

app.listen(port, () => { // REMOVE-ON-DEPLOY
  console.log(`Example app listening on port ${port}`) // REMOVE-ON-DEPLOY
}) // REMOVE-ON-DEPLOY

module.exports = app