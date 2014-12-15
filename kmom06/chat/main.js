$(document.ready(function() {
    var socket = io(),
    msgBox = $('#m'),
    messages = $('#messages');


    $('form').submit(function() {
        socket.emit('chat message', msgBox.val());
        msgBox.val('');
        return false;
    });

    socket.on('chat message', function(message) {
        messages.append($('<li>').text(message));
    });

    socket.on('connect', function(message) {
        messages.append($('<li>').text(message));
    });

    socket.on('disconnect', function(message) {
        messages.append($('<li>').text(message));
    });


}));

