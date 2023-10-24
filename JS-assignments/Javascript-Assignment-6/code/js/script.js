// const months = {
// 	0: ["January", 31],
// 	1: ["Feburary", 28],
// 	2: ["March", 31],
// 	3: ["April", 30],
// 	4: ["May", 31],
// 	5: ["June", 30],
// 	6: ["July", 31],
// 	7: ["August", 31],
// 	8: ["September", 30],
// 	9: ["October", 31],
// 	10: ["November", 30],
// 	11: ["December", 31],
// };

// const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// const currDate = new Date();

// console.log(currDate);

// const daysContainer = document.getElementById("days-container");

// const selectedMonth = document.getElementById("selected-month");
// const selectedYear = document.getElementById("selected-year");

// const dropDownMonth = document.getElementById("month-select");
// const dropDownYear = document.getElementById("year-select");

// selectedMonth.textContent = months[currDate.getMonth()][0];
// selectedYear.textContent = currDate.getFullYear();

// function generateDays() {
// 	for (let i of days) {
// 		let dayDiv = document.createElement("div");
// 		dayDiv.setAttribute("class", "day");
// 		dayDiv.setAttribute("id", i);
// 		dayDiv.innerText = i;
// 		daysContainer.append(dayDiv);
// 	}
// }

// function generateDropdown() {
// 	for (let i in months) {
// 		let option = document.createElement("option");
// 		option.setAttribute("class", "month-option");
// 		option.setAttribute("value", i);
// 		console.log(currDate.getMonth());
// 		if (months[i][0] === months[currDate.getMonth()][0]) {
// 			option.setAttribute("selected", true);
// 		}
// 		option.textContent = months[i][0];
// 		dropDownMonth.append(option);
// 	}
// 	for (let i = 1950; i <= 2050; i++) {
// 		let option = document.createElement("option");
// 		option.setAttribute("class", "year-option");
// 		option.setAttribute("value", i);
// 		if (i == currDate.getFullYear()) {
// 			option.setAttribute("selected", true);
// 		}
// 		option.textContent = i;
// 		dropDownYear.append(option);
// 	}
// }
// function generateDates() {
// 	let noOfDayInMonth = months[currDate.getMonth()][1];
// 	let dates = [];

// 	for (let i = 1; i <= noOfDayInMonth; i++) {
// 		if (i < 10) {
// 			dates.push(`${currDate.getMonth()}/${i}/${currDate.getFullYear()}`);
// 		} else {
// 			dates.push(`${currDate.getMonth()}/${i}/${currDate.getFullYear()}`);
// 		}
// 	}
// 	for (let i of dates) {
// 		let dateDiv = document.createElement("div");
// 		let date = new Date(i);
// 		let dayDiv = document.getElementById(days[date.getDay()]);
// 		dateDiv.textContent = i.split("/")[1];
// 		dayDiv.append(dateDiv);
// 	}
// 	console.log(dates);
// }
// generateDropdown();
// generateDays();
// generateDates();
// let date1 = new Date("1/1/2011");
// console.log(date1);
// // generateTable();
