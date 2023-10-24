import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

function CakeView() {
	const noOfCakes = useAppSelector((state) => state.cake.noOfCakes);
	const [quantity, setQuantity] = React.useState(1);
	const dispatch = useAppDispatch();
	return (
		<div>
			<input
				type="number"
				value={quantity}
				onChange={(e) => {
					setQuantity(parseInt(e.target.value));
				}}
			/>
			<h3>Number of cakes - {noOfCakes} </h3>
			<button
				onClick={() => {
					dispatch(ordered(quantity));
				}}
			>
				Order
			</button>
			<button
				onClick={() => {
					dispatch(restocked(quantity));
				}}
			>
				Restock
			</button>
		</div>
	);
}

export default CakeView;
