import fs from 'fs';
import http from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 8080;

app.use(express.static('./'));

io.on('connection', socket => {
    console.log(`> Socket.io conectou-se na porta ${PORT}`);
});

server.listen(PORT);