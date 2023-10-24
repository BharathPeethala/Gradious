let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let dayInput = document.getElementById("input-day");
let hoursInput = document.getElementById("input-hours");
let minutesInput = document.getElementById("input-minutes");
let secsInput = document.getElementById("input-secs");
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let flag = true;
function reset() {
	seconds = 0;
	minutes = 0;
	hours = 0;
	days = 0;
	flag = true;
	// clearInterval(runTimer)
	daysElement.textContent = "000";
	hoursElement.textContent = "00";
	minutesElement.textContent = "00";
	secondsElement.textContent = "00";
}

function set() {
	flag = true;
	if (isNaN(Number.parseInt(dayInput.value))) {
		days = 0;
	} else {
		days = Number.parseInt(dayInput.value);
	}

	if (isNaN(Number.parseInt(hoursInput.value))) {
		hours = 0;
	} else {
		hours = Number.parseInt(hoursInput.value);
	}
	if (isNaN(Number.parseInt(minutesInput.value))) {
		minutes = 0;
	} else {
		minutes = Number.parseInt(minutesInput.value);
	}
	if (isNaN(Number.parseInt(secsInput.value))) {
		seconds = 0;
	} else {
		seconds = Number.parseInt(secsInput.value);
	}
	dayInput.value = "";
	secsInput.value = "";
	hoursInput.value = "";
	minutesInput.value = "";
	if (days < 0 || hours < 0 || minutes < 0 || days < 0) {
		alert("Enter only positive integers 😁");
	} else {
		if (seconds >= 60) {
			minutes += Math.floor(seconds / 60);
			seconds = seconds % 60;
		}
		if (minutes >= 60) {
			hours += Math.floor(minutes / 60);
			minutes = minutes % 60;
		}
		if (hours >= 24) {
			days += Math.floor(hours / 24);
			hours = hours % 24;
		}
		daysElement.textContent = days;
		hoursElement.textContent = hours;
		minutesElement.textContent = minutes;
		secondsElement.textContent = seconds;
	}
}

function pause() {
	flag = true;
	clearInterval(runTimer);
}

function startResume() {
	if (flag)
		runTimer = setInterval(() => {
			flag = false;
			if (!(days === 0 && hours === 0 && minutes === 0 && seconds === 0)) {
				if (seconds === 0) {
					seconds = 60;
					minutes -= 1;
					minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
				}

				if (minutes < 0) {
					hours -= 1;
					minutes = 59;
					hoursElement.textContent = hours < 10 ? "0" + hours : hours;
					minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
				}
				if (hours < 0) {
					days -= 1;
					hours = 23;
					daysElement.textContent = days < 10 ? "0" + days : days;
					hoursElement.textContent = hours < 10 ? "0" + hours : hours;
				}
				seconds -= 1;
				secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
				console.log(days, hours, minutes, seconds);
			} else {
				alert("Time is completed 😊");
				clearInterval(runTimer);
			}
		}, 1000);
}
