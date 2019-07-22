const app = require('express')();
const http = require('http').createServer(app);
const port = 3000;

app.get('*', function(req, res){
    res.send('<h1>Hello world</h1>');
});

http.listen(port, function(){
    console.log(`App is running: 🌎 http://localhost:${port}`)
});