var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var client = new net.Socket();

client.connect(PORT, HOST, function() 
{
 console.log('CONNECTED TO: ' + HOST + ':' + PORT)
 client.write('Test_To_Send_Message')
});

client.on('data', function(data) 
{
	 console.log('server to send : '+ data);
	 var stdin = process.stdin;
   console.log("\n\nEnter input to send to server."+":");
     
   if(data=="AGAIN!")
   {
      stdin.on('data', function (data) 
      {
        client.write(''+data)
      });
    }
    else if(data=="END!")
    {
      client.write(''+data)
      client.destroy()
    }  
});


// Add a 'close' event handler for the client socket
client.on('close', function() 
{
    console.log('Connection closed');
});

