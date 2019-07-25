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
    console.log('Grid eye connected');

/*    socket.on('from_grid_eye', function(data) {
       console.log(data);
       socket.broadcast.emit("to_grid_eye_client", data);
    });*/

    // for testing
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 1, id: 3 });}, 500);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 3, id: 3 });}, 202);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 1, id: 3 });}, 1000);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 2, id: 3 });}, 504);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 3, id: 3 });}, 505);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 4, id: 3 });}, 2000);


    setTimeout(() => { io.emit('to_grid_eye_client', { count: 1, id: 3 });}, 12000);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 0, id: 3 });}, 12001);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 3, id: 3 });}, 12006);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 6, id: 3 });}, 12007);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 7, id: 3 });}, 12008);
    setTimeout(() => { io.emit('to_grid_eye_client', { count: 8, id: 3 });}, 12009);


    socket.on('disconnect', () => {
        console.log('Grid eye disconnected');
    });
});

server.listen(port, () => {
    console.log(`App is running: 🌎 http://localhost:${port}`)
});