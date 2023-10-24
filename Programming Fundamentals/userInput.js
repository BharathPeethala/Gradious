// import readline module
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.question("What is your name:",(string)=>{
	console.log("Your name is " + string);
	rl.close();
});
