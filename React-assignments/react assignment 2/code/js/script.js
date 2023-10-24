const root = ReactDOM.createRoot(document.getElementById("root"));

const Page = () => {
	return (
		<div>
			<Navbar />
			<Banner />
			<Footer />
		</div>
	);
};

function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="./assets/logo.jpg" />
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

function Banner() {
	return (
		<div className="banner">
			<div className="image">
				<img src="./assets/banner.jpg" />
			</div>
			<div className="content">
				<h3>KAMBALA</h3>
				<p>
					Kambala is a traditional buffalo race that originated in the state of
					Karnataka, India. It is a popular sport among the farming community
					and is usually held during the monsoon season. The race involves two
					buffaloes being driven by a handler along a muddy track. The buffaloes
					are spurred on by the sound of a whip and the cheers of the
					spectators. Kambala has a cultural significance in Karnataka and is
					also seen as a way of preserving the traditional farming practices of
					the region.
				</p>
			</div>
		</div>
	);
}
function Footer() {
	return (
		<div className="footer">
			<div className="content">
				<div className="links">
					<li>
						<a href="#">Instagram</a>
					</li>
					<li>
						<a href="#">Facebook</a>
					</li>
					<li>
						<a href="#">Twitter</a>
					</li>
				</div>
				<hr className="line" />
				<h3>© All rights are resevered 2022</h3>
			</div>
		</div>
	);
}

root.render(<Page />);
