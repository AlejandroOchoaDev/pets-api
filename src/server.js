const express = require('express')
const userRouter = require('./routers/users')
const petsRouter = require('./routers/pets')
const cors = require('cors')
const app = express()
let port = 3000

app.use(cors())
app.use(express.json())
app.use('/users', userRouter)
app.use('/pets', petsRouter)

app.get('/', (req, res) => {
  res.json({
    messege: 'pets-api v1'
  })
})

module.exports = {
  server: app,
  port
}
