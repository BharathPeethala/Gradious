const net = require("net");
const client = new net.Socket();
const port = 3000;
const server = "localhost";

const makeGETRequest = () => {
	client.connect(port, server, () => {
		console.log("server connect");
		const header = `GET /test HTTP/1.0\r\nHost:${server}\r\n\r\n`;
		client.write(header);
	});
};

const makePOSTRequest = () => {
	client.connect(port, server, () => {
		console.log("server connect");
		const data = JSON.stringify({ text: "vasu is a gandu" });
		const header = `POST /test HTTP/1.0\r\nContent-Type: application/json\r\nContent-Length: ${data.length}\r\n\r\n${data}`;
		client.write(header);
	});
};

// makeGETRequest();
makePOSTRequest();

client.on("data", (data) => {
	console.log(data.toString());
});

client.on("end", () => {
	console.log("connection is closed");
});
