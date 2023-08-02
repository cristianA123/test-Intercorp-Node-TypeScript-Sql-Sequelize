import express, { Application } from 'express'
import cors from 'cors'

import seguroRoutes from '../routes/seguros'

import db from './../db/connection'

class Server {
    private app : Application
    private port : string
    private apiPath = {
      seguros: '/api/seguros'
    }

    constructor () {
      this.app = express()
      this.port = process.env.PORT || '4000'
      this.middlewares()
      this.routes()
      this.dbCOnnection()
    }

    async dbCOnnection () {
      try {
        await db.authenticate()
        console.log(' database conectado online----')
      } catch (error :any) {
        throw new Error(error)
      }
    }

    middlewares () {
      this.app.use(cors())
      this.app.use(express.json())
      this.app.use(express.static('public'))
    }

    routes () {
      this.app.use(this.apiPath.seguros, seguroRoutes)
    }

    listen () {
      this.app.listen(this.port, () => {
        console.log('SERVIDOR CORRIENDO EN EL PUERTO', this.port)
      })
    }
}

export default Server
