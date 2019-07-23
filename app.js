const path = require("path");
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
// The Socket.io server takes an HTTP server as an argument so
// that it can listen for socket.io-related requests:
const io = socketio(server);


const publicPath = path.join(__dirname, "public");
const port = process.env.PORT || 3000; // port set by heroku

app.use(express.static(publicPath));

app.get('/',(req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

// server ref -> io
io.on('connection', (socket) => {
    // client ref -> socket
    console.log('A user connected');

    socket.on('time', function(timeString) {
       console.log(timeString);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => {
    console.log(`App is running: 🌎 http://localhost:${port}`)
});