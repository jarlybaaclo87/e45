const http = require('http');

http.createServer(function(res, res){
    res.writeHead(200,{'Content-type':'text-plate'});
    res.end('Hello Kode-brewers');
}).listen(3000,'127.0.0.1');

console.log('Server listening at 127.0.0.1:3000');