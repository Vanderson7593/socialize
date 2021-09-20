import { IUser } from '@types'
import express, { Express } from 'express'
import * as http from 'http'
import next, { NextApiHandler } from 'next'
import * as socketio from 'socket.io'
import { userAddController } from './controllers/user/user-add-controller'
import { userReconnectController } from './controllers/user/user-reconnect-controller'
import { userRemController } from './controllers/user/user-rem-controller'

let usersArray = [] as IUser[]
const port: number = parseInt(process.env.PORT || '3000', 10)
const dev: boolean = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler: NextApiHandler = nextApp.getRequestHandler()

nextApp.prepare().then(async () => {
  const app: Express = express()
  const server: http.Server = http.createServer(app)
  const io: socketio.Server = new socketio.Server()
  io.attach(server)

  io.on('connection', (socket: socketio.Socket) => {
    console.log('User connected connection')

    socket.on('remUser', (user: any) => {
      usersArray = userRemController(user, usersArray)
      io.sockets.sockets.forEach(s => {
        socket.to(s.id).emit('users', usersArray)
      })
    })

    socket.on('addUser', (data: any) => {
      usersArray = userAddController(socket, data, usersArray)
      io.sockets.sockets.forEach(s => {
        socket.to(s.id).emit('users', usersArray)
      })
      socket.emit('users', usersArray)
    })

    socket.on('reconnect', (data: any) => {
      usersArray = userReconnectController(socket, data, usersArray)
      io.sockets.sockets.forEach(s => {
        socket.to(s.id).emit('users', usersArray)
      })
      socket.emit('users', usersArray)
    })

    socket.on('disconnect', () => {
      console.log('client disconnected')
    })
  })

  app.all('*', (req: any, res: any) => nextHandler(req, res))

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
