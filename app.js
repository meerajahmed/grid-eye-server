const path = require("path");
const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const publicPath = path.join(__dirname, "public");
const port = 3000;

app.use(express.static(publicPath));

app.get('*',(req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

server.listen(port, () => {
    console.log(`App is running: 🌎 http://localhost:${port}`)
});