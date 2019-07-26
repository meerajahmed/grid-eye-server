$(function () {
    var socket = io();
    const element = $('#messages');
    socket.on('to_grid_eye_client', function(msg){  
        element.append($('<li>').text(JSON.stringify(msg)));
        element[0].scrollTop = element[0].scrollHeight;
    });
});