const net = require("net");
const client = new net.Socket();
const server = "localhost";
const port = 3000;

var makeGETRequest = function () {
	client.connect(port, server, () => {
		console.log("Connected Server");
		const header = `GET /test1 HTTP/1.1\r\nHost:${server}\r\n\r\n`;
		client.write(header);
	});
};

var makePOSTRequest = function () {
	client.connect(port, server, () => {
		console.log("Connect Server");
		const data = JSON.stringify({ text: "hi this data is sent" });
		const header = `POST /test1 HTTP/1.0\r\nContent-Type: application/json\r\nContent-Length: ${data.length}\r\n\r\n${data}`;
		client.write(header);
	});
};
// makeGETRequest();
makePOSTRequest();

client.on("data", function (data) {
	console.log("Received " + data.toString());
});

client.on("end", function () {
	console.log("Connection closed");
});
