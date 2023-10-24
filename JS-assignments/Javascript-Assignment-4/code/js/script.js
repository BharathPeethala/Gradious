var json_object = {
	"student1@example.com": {
		firstName: "John",
		lastName: "Doe",
		mobile: "123-456-7890",
		age: 20,
		city: "New York",
	},
	"student2@example.com": {
		firstName: "Jane",
		lastName: "Smith",
		mobile: "234-567-8901",
		age: 22,
		city: "Los Angeles",
	},
	"student3@example.com": {
		firstName: "Michael",
		lastName: "Johnson",
		mobile: "345-678-9012",
		age: 19,
		city: "Chicago",
	},
	"student4@example.com": {
		firstName: "Emily",
		lastName: "Davis",
		mobile: "456-789-0123",
		age: 21,
		city: "Houston",
	},
	"student5@example.com": {
		firstName: "Daniel",
		lastName: "Brown",
		mobile: "567-890-1234",
		age: 18,
		city: "Philadelphia",
	},
	"student6@example.com": {
		firstName: "Samantha",
		lastName: "Garcia",
		mobile: "678-901-2345",
		age: 23,
		city: "Phoenix",
	},
	"student7@example.com": {
		firstName: "William",
		lastName: "Wilson",
		mobile: "789-012-3456",
		age: 20,
		city: "San Antonio",
	},
	"student8@example.com": {
		firstName: "Sophia",
		lastName: "Lee",
		mobile: "890-123-4567",
		age: 19,
		city: "San Diego",
	},
	"student9@example.com": {
		firstName: "Joseph",
		lastName: "Taylor",
		mobile: "901-234-5678",
		age: 21,
		city: "Dallas",
	},
	"student10@example.com": {
		firstName: "Olivia",
		lastName: "Anderson",
		mobile: "012-345-6789",
		age: 22,
		city: "San Jose",
	},
	"student11@example.com": {
		firstName: "Ethan",
		lastName: "Martin",
		mobile: "123-456-7890",
		age: 20,
		city: "Denver",
	},
	"student12@example.com": {
		firstName: "Mia",
		lastName: "Hernandez",
		mobile: "234-567-8901",
		age: 22,
		city: "Seattle",
	},
	"student13@example.com": {
		firstName: "Alexander",
		lastName: "Garcia",
		mobile: "345-678-9012",
		age: 19,
		city: "Boston",
	},
	"student14@example.com": {
		firstName: "Avery",
		lastName: "Wilson",
		mobile: "456-789-0123",
		age: 21,
		city: "Miami",
	},
};
localStorage.setItem("students", JSON.stringify(json_object));

const loadData = () => {
	var data = localStorage.getItem("students");
	var JSONdata = JSON.parse(data);
	var str = "";
	var cont = document.getElementById("col-container");
	console.log(JSONdata);
	let i = 1;
	let color = "purple";
	for (let [key, value] of Object.entries(JSONdata)) {
		str = `<h4 class='element'>${i}</h4><h4 class='element'>${
			value["firstName"] + " " + value["lastName"]
		}</h4><h4 class='element'>${value["age"]}</h4><h4 class='element'>${
			value["mobile"]
		}</h4><h4 class='element'>${key}</h4><h4 class='element'>${
			value["city"]
		}</h4>`;
		var div = document.createElement("div");
		color = color === "purple" ? "biege" : "purple";
		div.setAttribute("class", `row ${color}`);
		div.innerHTML = str;
		i += 1;
		// div.innerHTML = str;
		cont.append(div);
	}
};

loadData();
