import { React, useEffect, useState } from "react";
import moment from "moment";

function AddFrom({
	FormData,
	setFormData,
	LocalStorage,
	setLocalStorage,
	defaultForm,
	updateIdFlag,
	setUpdateIdFlag,
}) {
	const [workingDays, setWorkingDays] = useState([]);
	const months = {
		January: 1,
		February: 2,
		March: 3,
		April: 4,
		May: 5,
		June: 6,
		July: 7,
		August: 8,
		September: 9,
		October: 10,
		November: 11,
		December: 12,
	};
	useEffect(() => {
		let days = [];
		let daysRequired = 8;
		for (let i = 0; i <= daysRequired; i++) {
			let temp = moment().add(i, "days").format("dddd, Do MMMM YYYY");
			if (temp.split(",")[0] !== "Sunday") days.push(temp);
		}
		console.log(days);
		setWorkingDays(days);
		console.log(FormData);
	}, [FormData]);
	const handleChange = (e) => {
		setFormData((prev) => {
			return { ...prev, [e.target.id]: e.target.value };
		});
	};
	const handleSubmit = (e) => {
		let targetId;
		e.preventDefault();
		if (updateIdFlag[1]) {
			let localArray = JSON.parse(localStorage.getItem("bookings"));
			localArray[updateIdFlag[0]] = FormData;
			targetId = localArray.indexOf(FormData);
			localStorage.setItem("bookings", JSON.stringify(localArray));
			setUpdateIdFlag(["", false]);
			setLocalStorage(localArray);
		} else {
			console.log(FormData);
			console.log(LocalStorage);
			let temp = LocalStorage === null ? [] : [...LocalStorage];
			temp.push(FormData);
			targetId = temp.length - 1;
			localStorage.setItem("bookings", JSON.stringify(temp));
			setLocalStorage(temp);
		}
		setFormData(() => {
			console.log(targetId);
			const element = document.getElementById(targetId);
			console.log(element);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
			return defaultForm();
		});
	};
	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit} autoComplete="off">
				<div className="input-divs heading-banner">
					🩺 Welcome to Gradious Doctor Appointment Booking
				</div>
				<div className="input-divs">
					<input
						type="text"
						id="patientName"
						pattern="^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$"
						minLength="3"
						maxLength="50"
						required
						className={"text-box"}
						value={FormData.patientName}
						onChange={handleChange}
						placeholder={"Patient Name *"}
					/>
					<input
						type="text"
						pattern="^[789][0-9]{9}"
						title="Enter a valid phone number"
						id="phoneNo"
						required
						value={FormData.phoneNo}
						onChange={handleChange}
						className={"text-box"}
						placeholder={"Phone No*"}
					/>
					<input
						type="number"
						id="age"
						required
						value={FormData.age}
						onChange={handleChange}
						className={"text-box"}
						placeholder={"Age *"}
						min="0"
						max="100"
					/>
					<input
						type="time"
						id="visitTime"
						required
						value={FormData.visitTime}
						onChange={handleChange}
						className={"text-box"}
						placeholder={"Time(24 hour format)*"}
					/>
				</div>
				<div className="input-divs">
					<select
						id="doctor"
						name="doctors"
						required
						value={FormData.doctor}
						className={"text-box"}
						onChange={handleChange}
					>
						<option value="">Doctor *</option>
						<option value="Dr. Bharath">Dr. Bharath</option>
						<option value="Dr. Vasu">Dr. Vasu</option>
						<option value="Dr. Mani">Dr. Mani</option>
					</select>
					<select
						id="gender"
						name="genders"
						value={FormData.gender}
						className={"text-box"}
						onChange={handleChange}
						required
					>
						<option value="">Gender *</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					<select
						id="visitStatus"
						name="visits"
						value={FormData.visitStatus}
						className={"text-box"}
						onChange={handleChange}
						required
					>
						<option value="Consult" selected>
							Consult
						</option>
						<option value="Revisit">Revisit</option>
					</select>
					<select
						id="visitDate"
						required
						value={FormData.visitDate}
						onChange={handleChange}
						className={"text-box"}
					>
						{workingDays.map((date) => {
							return <option value={date + ""}>{date}</option>;
						})}
					</select>
				</div>
				<div className="input-divs">
					<button type="submit" className="btn">
						{updateIdFlag[1] ? "Update" : "Book"} Appointment
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddFrom;
