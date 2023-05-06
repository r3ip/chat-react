import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log('cliente conectado', socket.id)

  socket.on('chat message', (payload) => {
    // console.log(payload)
    io.emit('chat message', payload);
  })
});

server.listen(5000)