var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var client = new net.Socket();
var DATA
let p0 = require('./input.js');

let stdin = process.openStdin() 
let x
 		
 		console.log("Test Input : ")
 		stdin.addListener("data", (d) => 
	 	{    x=d.toString().trim()
		 	 console.log("Data = "+x+"\n")    
		     stdin.destroy()  
 		});

//console.log("Test Data = "+p0.Input(DATA)+"\n")    


client.connect(PORT, HOST, function() 
{
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   client.write(''+x);
});
/*
client.on('data', function(data) 
{
	
 	client.write(""+x);
    console.log('Server to Send : '+ x);
    client.destroy();
});

// Add a 'close' event handler for the client socket
client.on('close', function() 
{
   console.log('Connection closed');
});
*/