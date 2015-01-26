var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);


app.get('/', function(req, res){
      res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket) {

    console.log('a user connected..');
    io.emit('connect', 'a user connected');

    socket.on('disconnect', function() {
        io.emit('disconnect', 'a user disconnected');
        console.log('user disconnected');
    });

    socket.on('chat message', function(message) {
        io.emit('chat message', message);
        console.log('NEW MESSAGE: ', message);
    });
});



http.listen(3000, function(){
      console.log('listening on *:3000');
});
