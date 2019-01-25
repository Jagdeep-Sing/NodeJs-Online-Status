var mDomain = document.domain;
document.domain = mDomain;

//Make connection
var socket = io.connect('http://largecalls.com:4002');

//document.domain = "largecalls.com";
output = document.getElementById('output');
function emitOnlineEvent(name){

socket.emit('present',{
  name:name
});

}

socket.on('present', function(data){

console.log(data.name);
  document.getElementById('output').innerHTML += "<div style='padding-left:5em'>"+data.name+"</div>";
});


