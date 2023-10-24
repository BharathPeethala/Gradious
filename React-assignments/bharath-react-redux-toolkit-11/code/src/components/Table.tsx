import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { deleteUser, setUsers } from "../features/UserOperations/userSlice";
import { appointment, initialStateType } from "../Types/Appointment.types";
type TableProps = {
	FormData: appointment;
	LocalStorage: appointment[];
	setLocalStorage: React.Dispatch<React.SetStateAction<appointment[]>>;
	setFormData: React.Dispatch<React.SetStateAction<appointment>>;
	setUpdateIdFlag: React.Dispatch<React.SetStateAction<(string | boolean)[]>>;
};
function Table({
	FormData,
	LocalStorage,
	setLocalStorage,
	setFormData,
	setUpdateIdFlag,
}: TableProps) {
	const dispatch = useAppDispatch();
	const appointments = useAppSelector((state:{user:initialStateType}) => state.user);
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = (e.target as HTMLButtonElement).id.split("-")[1];
		if (id !== undefined) {
			console.log(id)
			dispatch(deleteUser(parseInt(id)));
		}
	};
	const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = parseInt((e.target as HTMLButtonElement).id.split("-")[1]);
		setFormData(appointments[id])
		setUpdateIdFlag([id+'',true])
	};
	useEffect(() => {
		let bookings = localStorage.getItem("Appointments");
		bookings = bookings !== null ? JSON.parse(bookings) : null;
		console.log(bookings)
		if (bookings !== null) {
			dispatch(setUsers((bookings)));
		}
	}, []);
	console.log(appointments)
	return (
		<div className="table-container">
			<table cellSpacing="0" cellPadding="0">
				<tr>
					<th>Patient</th>
					<th>Status</th>
					<th>Appointment</th>
					<th>Phone</th>
					<th>Doctor</th>
					<th>Actions</th>
				</tr>
				{appointments.map((data, index) => {
						return (
							<tr id={index + ""}>
								<td className="person-info">
									<div>
										<img
											src={
												data.gender === "Female"
													? "/assets/female.png"
													: "/assets/male.png"
											}
										/>
									</div>
									<div>
										<p className="patient-name">
											{data.patientName.toLowerCase()}
										</p>
										<p className="sub-text">
											{data.age}yrs, {data.gender}
										</p>
									</div>
								</td>
								<td>
									<p
										className={
											data.visitStatus === "Consult"
												? "visit-consult"
												: "visit-revisit"
										}
									>
										{data.visitStatus}
									</p>
								</td>
								<td>
									<span style={{ color: "rgb(63, 94, 251)" }}>Time</span> :{" "}
									{Number.parseInt(data.visitTime.split(":")[0]) > 12
										? Number.parseInt(data.visitTime.split(":")[0]) - 12
										: Number.parseInt(data.visitTime.split(":")[0]) == 0
										? 12
										: Number.parseInt(data.visitTime.split(":")[0])}
									:{data.visitTime.split(":")[1]}
									{Number.parseInt(data.visitTime.split(":")[0]) >= 12
										? "PM"
										: "AM"}
									<p className="sub-text">{data.visitDate}</p>
								</td>
								<td>
									+91 {data.phoneNo}
									<a className="phone-logo" href={`tel:+91${data.phoneNo}`}>
										<i className="bi bi-telephone"></i>
									</a>
								</td>
								<td>{data.doctor}</td>
								<td>
									<button className="table-btn" onClick={handleUpdate}>
										<i
											id={`update-${index}`}
											className="bi bi-pencil-square up-logo"
										></i>
									</button>
									<button className="table-btn" onClick={handleDelete}>
										<i
											id={`delete-${index}`}
											className="bi bi-trash3-fill del-logo"
										></i>
									</button>
								</td>
							</tr>
						);
					})}
			</table>
		</div>
	);
}

export default Table;
