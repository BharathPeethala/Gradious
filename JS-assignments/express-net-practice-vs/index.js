const express = require("express");
const app = express();
app.use(express.json());
app.get("/test", (req, res) => {
	res.send("GET REQUEST IS RECIEVED");
});

app.post("/test", (req, res) => {
    console.log(req.body)
	res.send("POST REQUEST");
});

app.listen("3000", () => {
	console.log("Server started");
});
