var express = require('express');
var socket = require('socket.io');
var http=require('http');
var fs=require('fs');
//App setup
var app = express();

var wServer=http.createServer(app);
//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(wServer);

io.on('connection', function(socket){
  console.log('made socket connection',socket.id);

/*  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });
*/
  socket.on('present',function(data){
     io.sockets.emit('present', data)
  });
});
wServer.listen(4002,function(){
console.log('listening on port 4002');
})
