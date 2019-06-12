const mongoose = require('mongoose')
// const connectionString = 'mongodb+srv://ale8a:74ls10nnand@ale8a-3dkga.mongodb.net/test?retryWrites=true&w=majority'
const connectionString = 'mongodb+srv://aleochoa:clave@db-pets-uilpa.mongodb.net/test?retryWrites=true&w=majority'

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, (error) => {
    if (error) return reject(error)
    resolve()
  })
})

module.exports = {
  connect
}
