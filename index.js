var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('I like seunghwanjoo!');
});

app.get('/start', function(req, res){
    res.send('start page!');
});

//아까 nginx설정 했을때 그것임 
server.listen(3000, '127.0.0.1', function(){ //로컬에서 3000포트로 연결 
    console.log('Server listen on port!'+ server.address().port);
});
