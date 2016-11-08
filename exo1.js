var http = require('http'),
    port = 1337;

function handle (req,res){
    console.log('requete');
    res.end('<!doctype html><head><title>blabla</title></head><body><h1>hello</h1></body></html>');
}

var server = http.createServer(handle);

server .listen(port, function(){
    
    console.log('server listening o, http://localhost:%s',port);
});