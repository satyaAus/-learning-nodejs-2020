'use strict';

//using http//

const http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{ 'Content-Type': 'text/plan'});
    response.end('Hello World\n');
}).listen(8081);

console.log('server running at http://127.0.0.1:8081/');
