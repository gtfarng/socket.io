module.exports.Input =  (DATA) => 
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