import React from "react";

function ResetGame({ FinalNums, setFinalNums,setMoves,setTimer,setRemoveItems}) {
	const resetGame = () => {
		const nums = [
			{
				id: 1,
				val: 1,
				status: "closed",
				visible: true,
			},

			{
				id: 2,
				val: 2,
				status: "closed",
				visible: true,
			},
			{
				id: 3,
				val: 3,
				status: "closed",
				visible: true,
			},
			{
				id: 4,
				val: 4,
				status: "closed",
				visible: true,
			},
			{
				id: 5,
				val: 5,
				status: "closed",
				visible: true,
			},
			{
				id: 6,
				val: 6,
				status: "closed",
				visible: true,
			},
			{
				id: 7,
				val: 7,
				status: "closed",
				visible: true,
			},
			{
				id: 8,
				val: 8,
				status: "closed",
				visible: true,
			},
			{
				id: 9,
				val: 1,
				status: "closed",
				visible: true,
			},
			{
				id: 10,
				val: 2,
				status: "closed",
				visible: true,
			},
			{
				id: 11,
				val: 3,
				status: "closed",
				visible: true,
			},
			{
				id: 12,
				val: 4,
				status: "closed",
				visible: true,
			},
			{
				id: 13,
				val: 5,
				status: "closed",
				visible: true,
			},
			{
				id: 14,
				val: 6,
				visible: true,
				status: "closed",
				visible: true,
			},
			{
				id: 15,
				val: 7,
				status: "closed",
				visible: true,
			},
			{
				id: 16,
				val: 8,
				status: "closed",
				visible: true,
			},
		];
		nums.sort(() => Math.random() - 0.5);
		setFinalNums(nums);
		setTimer('reset')
        setMoves(0)
	    setRemoveItems(0)
	};
	return (
		<div className="reset-container" onClick={resetGame}>
			Reset Game
		</div>
	);
}

export default ResetGame;
