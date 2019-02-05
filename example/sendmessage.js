var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var client = new net.Socket();
var i = 0

client.connect(PORT, HOST, function() 
{
 console.log('CONNECTED TO: ' + HOST + ':' + PORT)
 client.write('Test_To_Send_Message')
});

client.on('data', function(data) 
{
	 console.log('DATA: '+ data);
	 
      var standard_input = process.stdin;
      console.log("Please input number in command line."  + "#" + (i+1));
     
      standard_input.on('data', function (data) 
      {
        client.write(''+ data)
        client.destroy()
      });
});


// Add a 'close' event handler for the client socket
client.on('close', function() 
{
    console.log('Connection closed');
});

