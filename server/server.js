import fs from 'fs';
import http from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 8080;

app.use(express.static('./'));
server.listen(PORT);

io.on('connection', socket => {
    console.log(`> Socket.io conectou-se na porta ${PORT}`);
});

var discord = new Discord.Discord(clientId, Discord.CreateFlags.Default);

// Request user's avatar data. Sizes can be powers of 2 between 16 and 2048
imageManager.Fetch(Discord.ImageHandle.User(53908232506183680, 128), (result, handle) =>
{
  {
    if (result == Discord.Result.Ok)
    {
      // If you are working in Unity, you can also use GetTexture()
      // Which is only exposed for Unity builds
      // These return raw RGBA.
      var data = imageManager.GetData(handle);
    }
    else
    {
      Console.WriteLine("image error {0}", handle.Id);
    }
  }
};
