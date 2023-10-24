import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ordered,restocked } from './icecreamSlice';
function IcecreamView() {
    const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);
    const dispatch = useDispatch()
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

export default IcecreamView