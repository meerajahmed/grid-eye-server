$(function () {
    var socket = io();
    const element = $('#messages');
    socket.on('to_grid_eye_client', function(msg){  
        element.append($('<li>').text(JSON.stringify(msg)));        
    });
    setInterval(function() {
        element[0].scrollTop = element[0].scrollHeight;
    }, 500);
});