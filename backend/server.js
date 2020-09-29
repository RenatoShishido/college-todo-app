const express = require('express')
const CORS = require('cors')
const Loader = require('./api/loader')

class Server {
  constructor() {
    const app = express()
    app.use(express.json())
    app.use(CORS())


    require('./api/db/db')
    Loader.loadAll(app)




    const PORT = 3000
    app.listen(PORT, () => {
    console.log(`SERVIDOR ESTA RODANDO NA PORTA ${PORT}`)
    })
  }
}

new Server()