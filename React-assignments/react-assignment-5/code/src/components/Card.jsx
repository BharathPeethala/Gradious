import React from "react";
function formatDate(date) {
	const seenDate = new Date(date);
	const currDate = new Date();
	console.log(seenDate);
	let diff = Math.floor((currDate - seenDate) / (60 * 60 * 1000));
	let text;
	if (diff < 24) {
		text = (diff === 1) ? " hour" : " hours"
		return diff + text;
	} else {
		if (Math.floor(diff / 24) < 7) {
			text = Math.floor(diff / 24) == 1 ? " day" : " days";
			return Math.floor(diff / 24) + text;
		} else {
			return "several days";
		}
	}
}
function Card(props) {
	return (
		<div className="Card">
			<div className="Card-Head">
				<div className="star-logo">
					<img
						src={
							props.user.imageLink === ""
								? "./assets/d.png"
								: props.user.imageLink
						}
						alt="user image"
						className="userImage"
					/>
					<i
						className="bi bi-star-fill"
						style={
							props.user.star ? { color: "#fac008" } : { color: "#e5dfe8" }
						}
					></i>
				</div>
				<p className="userName">
					{props.user.firstName} {props.user.lastName},{" "}
					<span id="age">{props.user.age}</span>
				</p>
				<p className="location price">
					<i className="bi bi-geo-alt"></i> {props.user.birthCity},{" "}
					{props.user.birthCountry}
				</p>
			</div>
			<div className="Card-Body">
				<p className="designation">{props.user.professions.join(", ")}</p>
				<p className="description">{props.user.description}</p>
			</div>
			<div className="Card-Foot">
				<button className="btn btn-view">VIEW CV</button>
				<button className="btn btn-make">MAKE OFFER</button>
				<div className="status-cont">
					{props.user.status === "Online" ? (
						<div className="status-text">
							<span className="dot"></span>
							{props.user.status}
						</div>
					) : (
						<div className="status-text">
							Last seen {formatDate(props.user.status)} ago
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
