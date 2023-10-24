import { React, useState } from "react";

function Counter() {
	const increment = () => {
		setCounter(Counter + 1);
	};
	const decrement = () => {
		setCounter(Counter - 1);
	};
	const [Counter, setCounter] = useState(0);
	return (
		<div className="counter-container">
			<div className="counter">
				<p>Counter : {Counter}</p>
			</div>
			<div className="btn-container">
				<button className="btn" onClick={increment}>
					Increament
				</button>
				<button className="btn" onClick={decrement}>
					Decrement
				</button>
			</div>
		</div>
	);
}

export default Counter;
