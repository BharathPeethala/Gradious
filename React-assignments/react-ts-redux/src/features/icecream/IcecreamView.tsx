import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";
function IcecreamView() {
	const noOfIcecreams = useAppSelector((state) => state.icecream.noOfIcecreams);
	const dispatch = useAppDispatch();
	return (
		<div>
			<h3>Number of icecreams - {noOfIcecreams}</h3>
			<button
				onClick={() => {
					dispatch(ordered(10));
				}}
			>
				Order
			</button>
			<button
				onClick={() => {
					dispatch(restocked(10));
				}}
			>
				Restock
			</button>
		</div>
	);
}

export default IcecreamView;
