import React from "react";
import banner from '../assets/banner.jpg'
function Body() {
	return (
		<div className="banner">
			<div className="image">
				<img src={banner}/>
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

export default Body;
