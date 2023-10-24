var data = require("./users.json");
var express = require("express");
var app = express();
app.use(express.json());
app.get("/test1", (req, res) => {
	console.log(req.headers);
	res.send(data);
});

app.post("/test1", (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.listen("3000", () => {
	console.log("Server started at:3000");
});
