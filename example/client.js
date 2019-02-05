var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var client = new net.Socket();

client.connect(PORT, HOST, function() 
{
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   client.write('#GTfarng');
});

client.on('data', function(data) 
{
    console.log('Server to Send : '+ data);
   client.destroy();
});

// Add a 'close' event handler for the client socket
client.on('close', function() 
{
   console.log('Connection closed');
});
