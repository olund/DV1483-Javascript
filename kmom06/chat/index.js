var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    express = require('express');
    users = {};


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
      res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket) {

    socket.on('join', function (name) {
        // add user to users
        users[socket.id] = name;

        // Send info to the client
        socket.emit('update', 'You have connected to the server');

        // Send info to all clients that a users joined
        io.sockets.emit('update', name + ' has joined the server.');
        io.sockets.emit('update-people', users);
    });

    socket.on('command', function (cmd) {
        switch (cmd.command) {
            case 'nick':
                io.sockets.emit('update', users[socket.id] + ' changed their nick to: ' + cmd.nick);
                users[socket.id] = cmd.nick;
                io.sockets.emit('update-people', users);

            break;

            case 'me':
                // username + ' command'
                var msg = "<b style='color: red;'>" + cmd.nick + "</b>" + ": " + cmd.arg;
                io.sockets.emit('update', msg);
            break;
        }
    });

    socket.on('send', function (message) {
        io.sockets.emit('chat', {
            who: users[socket.id],
            message: message,
            date: new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"),
        });
    });

    socket.on('disconnect', function () {
        io.sockets.emit('update', users[socket.id] + ' has left the server.');
        delete users[socket.id];
        io.sockets.emit('update-people', users);
    });
});

http.listen(3000, function () {
      console.log('listening on *:3000');
});
