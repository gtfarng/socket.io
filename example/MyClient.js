var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var client = new net.Socket();

//let p0 = require('./input.js');
let stdin = process.openStdin() 
var x="#GTfarng"
const getData = (data) => 
 {
 	 	console.log("Test Input : ")
 		stdin.addListener("data", (data) => 
	 	{    x=data.toString().trim()
		 	 console.log("Data = "+data+"\n")    
		     stdin.destroy()  
 		});

}		


/*
 		console.log("Test Input : ")
 		stdin.addListener("data", (d) => 
	 	{    x=d.toString().trim()
		 	 console.log("Data = "+x+"\n")    
		     stdin.destroy()  
 		});
*/

client.connect(PORT, HOST, function() 
{  
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   getData(x) 
   client.write(''+x);

});

client.on('data', function(data) 
{
	console.log('1Server to Send : '+ data);
 	client.write(""+x);
    console.log('2Server to Send : '+ x);
    client.destroy();
});


// Add a 'close' event handler for the client socket
client.on('close', function() 
{
   console.log('Connection closed');
});
