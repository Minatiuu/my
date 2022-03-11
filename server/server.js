import http from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const PORT = 8080;

app.use(express.static('/'));
httpServer.listen(PORT);

io.on('connection', socket  => {
    console.log(`> Socket.io conectou-se na porta ${PORT}`);
    
});
