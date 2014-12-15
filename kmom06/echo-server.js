var port = 8150,
    http = require('http'),
    WebSocketServer = require('websocket').server;


var httpServer = http.createServer(function(req, res) {
    console.log((new Date()), req.url);
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.end('Hello World\n');
});

httpServer.listen(port, function() {
    console.log((new Date()) + ' HTTP server is listening on port ' + port);
});


function originIsAllowed(origin) {
    if (origin === 'nodejs1.student.bth.se' || origin === 'localhost') {
        return true;
    }
    return false;
}


// Create an object for the websocket
// https://github.com/Worlize/WebSocket-Node/wiki/Documentation
var wsServer = new WebSocketServer({
    httpServer: httpServer,
    autoAcceptConnections: false
});

// Create a callback to handle each connection request
wsServer.on('request', function(request) {
    console.log(request.origin);
    if (!originIsAllowed(request.origin)) {
        request.reject();
        console.log("Connection from origin " + request.origin + ' rejected..');
        return;
    }


    var connection = request.accept('echo-protocol');
    console.log((new Date()) + ' Connection accepted from ' + request.origin);

// Callback to handle each message from the client
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });

  // Callback when client closes the connection
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});