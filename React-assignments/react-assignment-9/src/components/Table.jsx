import { React, useEffect } from "react";

function Table({
	LocalStorage,
	setLocalStorage,
	setFormData,
	setUpdateIdFlag,
}) {
	const handleDelete = (e) => {
		let temp = [...LocalStorage];
		temp.splice(Number.parseInt(e.target.id[e.target.id.length - 1]), 1);
		localStorage.setItem("bookings", JSON.stringify(temp));
		setLocalStorage(temp);
	};
	const handleUpdate = (e) => {
    window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		let temp = [...LocalStorage];
    console.log(temp);
		console.log("update");
    console.log(e.target)
		console.log(temp[Number.parseInt(e.target.id[e.target.id.length - 1])]);
		setFormData(temp[Number.parseInt(e.target.id[e.target.id.length - 1])]);
		setUpdateIdFlag([
			Number.parseInt(e.target.id[e.target.id.length - 1]),
			true,
		]);
	};
	useEffect(() => {
		console.log(JSON.parse(localStorage.getItem("bookings")));
		setLocalStorage(JSON.parse(localStorage.getItem("bookings")));
	}, []);
	return (
		<div className="table-container">
			<table cellspacing="0" cellpadding="0">
				<tr>
					<th>Patient</th>
					<th>Status</th>
					<th>Appointment</th>
					<th>Phone</th>
					<th>Doctor</th>
					<th>Actions</th>
				</tr>
				{LocalStorage &&
					LocalStorage.map((data, index) => {
						return (
							<tr>
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
										{data.patientName}
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
										: (Number.parseInt(data.visitTime.split(":")[0])==0)?12:Number.parseInt(data.visitTime.split(":")[0])}
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
