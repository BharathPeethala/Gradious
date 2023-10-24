import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import moment from "moment";
import { appointment } from "../Types/Appointment.types";
import { addUser, updateUser } from "../features/UserOperations/userSlice";
type AddFromProps = {
	FormData: appointment;
	setFormData: React.Dispatch<React.SetStateAction<appointment>>;
	updateIdFlag: (string | boolean)[];
	setUpdateIdFlag: React.Dispatch<React.SetStateAction<(string | boolean)[]>>;
	getFormSchema: () => appointment;
};
function AddFrom({
	FormData,
	setFormData,
	updateIdFlag,
	setUpdateIdFlag,
	getFormSchema,
}: AddFromProps) {
	const [workingDays, setWorkingDays] = useState<string[]>([]);
	const dispatch = useAppDispatch();
	useEffect(() => {
		let days: string[] = [];
		let daysRequired = 8;
		for (let i = 0; i <= daysRequired; i++) {
			let temp: string = moment().add(i, "days").format("dddd, Do MMMM YYYY");
			if (temp.split(",")[0] !== "Sunday") days.push(temp);
		}
		console.log(days);
		setWorkingDays(days);
		console.log(FormData);
	}, [FormData]);
	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => {
		setFormData((prev: appointment) => {
			return { ...prev, [e.target.id]: e.target.value };
		});
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (updateIdFlag[1] === false) {
			dispatch(addUser(FormData));
			 
		} else {
			dispatch(updateUser([updateIdFlag[0], FormData]));
			setUpdateIdFlag(["", false]);
		}
		setFormData(() => getFormSchema());
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
						minLength={3}
						maxLength={50}
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
						{updateIdFlag[1] === true ? "Update" : "Book"} Appointment
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddFrom;
