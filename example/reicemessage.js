var net = require('net');
var HOST = 'localhost';
var PORT = 6969;

net.createServer(function(sock) 
{
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) 
   {  
     if(data!=="NULL")
      {
       console.log('Client to Send : '+ data);
       sock.write("AGAIN!");
      }
      else 
      {
        console.log('Client to Send : '+ data);
        sock.write("END!");
      }  
   });

   sock.on('close', function(data) 
   {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);