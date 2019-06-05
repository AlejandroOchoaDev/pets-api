const { server, port } = require('./src/server')
const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('db conectada')
    server.listen(port, () => {
      console.log(`escuchando por el puerto: ${port}`)
    })
  })
  .catch(error => {
    console.error(error)
  })
