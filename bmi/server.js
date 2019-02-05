var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var server = net.createServer();
var i=0,ans,sub=0;
server.listen(PORT, HOST);

server.on('connection', function(sock) 
{
 	console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
 	
 	sock.on('data', function(data) 
 	{
 		console.log('IP : ' + sock.remoteAddress + ' Client to send : ' + data);
 		ans=data.toString().trim()
 		console.log("Submit: "+sub);
 		sub++;
 		console.log("Client to send = "+ans);

 		if(ans=='w'||ans=='W'||ans=='h'||ans=='H')
 		{
 			

 		}
 		else
 		{   
 			console.log("\n\nAnswer on server = "+answer);
 			sock.write("OK!");
 			i=1,sub=1;
 		}  	
 	});
});
console.log('Server listening on ' + HOST +':'+ PORT);