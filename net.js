var net = require('net');

net.createServer(function (stream) {
    stream.pipe(stream);
}).listen(5001);

// node net.js
// nc localhost 5001