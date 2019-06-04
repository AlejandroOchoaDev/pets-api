const { server, port } = require('./src/server')

server.listen(port, () => {
  console.log(`escuchando por el puerto: ${port}`)
})
