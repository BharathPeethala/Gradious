let guns = true;
function RamCharanGuns() {
	return new Promise((resolve, reject) => {
		if (guns) {
			resolve("ramcharan going to village with guns");
		} else {
			reject("guns are not there");
		}
	});
}

RamCharanGuns()
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});
