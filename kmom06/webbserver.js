var port = 8150,
    http = require('http');


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