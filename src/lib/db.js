const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://aleochoa:clave@db-pets-uilpa.mongodb.net/test?retryWrites=true&w=majority'

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false }, (error) => {
    if (error) return reject(error)
    resolve()
  })
})

module.exports = {
  connect
}
