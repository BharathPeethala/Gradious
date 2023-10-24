let status = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};
// let users_json = [
// 	{
// 		userId: 1,
// 		name: "Jon Snow",
// 		profilePicture:
// 			"https://cg0.cgsociety.org/uploads/images/original/hosseindiba-jon-snow-1-b968195d-au6q.jpeg",
// 		statusMessage: "We become what we think about!",
// 		presence: 1,
// 	},
// 	{
// 		userId: 2,
// 		name: "Daenerys Targaryen",
// 		profilePicture:
// 			"https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
// 		statusMessage: "A positive mindset brings positivethings.",
// 		presence: 3,
// 	},
// 	{
// 		userId: 3,
// 		name: "Tyrion Lannister",
// 		profilePicture:
// 			"https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
// 		statusMessage: "One small positive thought can change your whole day",
// 		presence: 3,
// 	},
// 	{
// 		userId: 4,
// 		name: "Jaime Lannister",
// 		profilePicture:
// 			"https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
// 		statusMessage: "I am a rockstar",
// 		presence: 1,
// 	},
// 	{
// 		userId: 5,
// 		name: "Arya Stark",
// 		profilePicture:
// 			"https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
// 		statusMessage: "I am using Gradious messenger",
// 		presence: 4,
// 	},
// ];
// localStorage.setItem("users", JSON.stringify(users_json));
// localStorage.setItem('id',"5")
let updateUserid, updateUserIndex;
let users = JSON.parse(localStorage.getItem("users"));
function display() {
	let root = document.getElementById("root");
	console.log(users);
	for (let user of users) {
		var div = document.createElement("div");
		div.setAttribute("class", "user");
		div.innerHTML = `
            <div class="img-container">
                <img src=${user["profilePicture"]} class='user-image ${
			status[user["presence"]]
		}' alt="user image">
            </div>
            <div class="user-detail">
                <p class="user-name">${user["name"]}</p>
                <p class="user-message">${user["statusMessage"]}</p>
            </div>
            <div class='three-btn'>
            <div class="dropdown">
            <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
                <ul class="dropdown-menu">
                    <li><button id='${user["userId"]}' onclick='deleteItem(${
			user["userId"]
		})'class="dropdown-item ">Delete</button></li>
                    <li><button  id='update-${
											user["userId"]
										}' onclick='updateItem(${
			user["userId"]
		})'class="dropdown-item ">Update</button></li>
                </ul>
            </div>
            </div>`;
		root.append(div);
	}
}
function visibileUserForm() {
	let addUserItem = document.getElementById("addUserForm");
	addUserItem.style.display = "block";
	var updateForm = document.getElementById("updateUserForm");
	// addForm.style.display = "none";
	updateForm.style.display = "none";
}
function addUser() {
	let name = document.getElementById("name").value;
	let statusMessage = document.getElementById("statusMessage").value;
	let profilePicLink = document.getElementById("profilePicLink").value;
	let presence = document.getElementById("presence").value;

	users.unshift({
		userId: Number.parseInt(localStorage.getItem("id")) + 1,
		name: name,
		profilePicture: profilePicLink,
		statusMessage: statusMessage,
		presence: presence,
	});
	localStorage.setItem("id", Number.parseInt(localStorage.getItem("id")) + 1);
	localStorage.setItem("users", JSON.stringify(users));
	console.log(users);
	display();
}
function deleteItem(e) {
	// console.log(e);
	let index;
	for (let i = 0; i < users.length; i++) {
		if (users[i]["userId"] === e) {
			index = i;
			break;
		}
	}
	console.log(index);
	users.splice(index, 1);
	console.log(users);
	localStorage.setItem("users", JSON.stringify(users));
	display();
	location.reload();
}
function updateItem(id) {
	console.log(id);
	var addForm = document.getElementById("addUserForm");
	var updateForm = document.getElementById("updateUserForm");
	addForm.style.display = "none";
	updateForm.style.display = "block";
	let name = document.getElementById("name-update");
	let statusMessage = document.getElementById("statusMessage-update");
	let profilePicLink = document.getElementById("profilePicLink-update");
	let presence = document.getElementById("presence-update");
	let index;
	for (let i = 0; i < users.length; i++) {
		if (id === users[i]["userId"]) {
			index = i;
			break;
		}
	}
	updateUserIndex = index;
	updateUserid = id;
	name.value = users[index]["name"];
	statusMessage.value = users[index]["statusMessage"];
	profilePicLink.value = users[index]["profilePicture"];
	presence.value = users[index]["presence"];
	console.log(id1);
	console.log(
		name.value,
		statusMessage.value,
		profilePicLink.value,
		presence.value
	);
}

function updateUserDetails() {
	let name = document.getElementById("name-update").value;
	let statusMessage = document.getElementById("statusMessage-update").value;
	let profilePicLink = document.getElementById("profilePicLink-update").value;
	let presence = document.getElementById("presence-update").value;
	users[updateUserIndex]["name"] = name;
	users[updateUserIndex]["statusMessage"] = statusMessage;
	users[updateUserIndex]["profilePicture"] = profilePicLink;
	users[updateUserIndex]["presence"] = presence;
	localStorage.setItem("users", JSON.stringify(users));
	display();
}
display();
