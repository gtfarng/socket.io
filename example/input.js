/*module.exports.Input =  (DATA) => 
{
  		let stdin = process.openStdin() 
 		let x
 		
 		console.log("Test Input : ")
 		stdin.addListener("data", (d) => 
	 	{    x=d.toString().trim()
		 	 console.log("Data = "+x+"\n")    
		     stdin.destroy()  
 		});
 		return x
}
*/

 	/*		
 		console.log("Test Input : ")
 		stdin.addListener("data", (d) => 
	 	{    x=d.toString().trim()
		 	 console.log("Data = "+x+"\n")    
		     stdin.destroy()  
 		});
*/

let stdin = process.openStdin() 
let x,y,i

 const getData = (data) => 
 {
 	 	console.log("Test Input : ")
 		stdin.addListener("data", (data) => 
	 	{    x=data.toString().trim()
		 	 console.log("Data = "+data+"\n")    
		     stdin.destroy()  
 		});

 }		


getData(x) 
getData(y) 


 
