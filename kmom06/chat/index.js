var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    users = {};


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

    socket.on('send', function (message) {
        io.sockets.emit('chat', users[socket.id], message);
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
