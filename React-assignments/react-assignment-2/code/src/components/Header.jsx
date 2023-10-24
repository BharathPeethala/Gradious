import React from "react";
import logo from "../assets/logo.jpg";
function Header() {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} />
			</div>
			<div className="links">
				<li>
					<a href="#">About Us</a>
				</li>
				<li>
					<a href="#">Pricing</a>
				</li>
				<li>
					<a href="#">Contact Us</a>
				</li>
			</div>
		</div>
	);
}

export default Header;
