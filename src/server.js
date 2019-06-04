const express = require('express')

const app = express()

let port = 3000

app.get('/hola', (req, res) => {
  res.json({
    messege: 'hola koders'
  })
})

module.exports = {
  server: app,
  port
}
