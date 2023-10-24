import { React, useState } from "react";

function Card({
	FinalNums,
	SelectedNums,
	setFinalNums,
	setSelectNums,
	value,
	id,
	moves,
	setMoves,
	startTimer,
	setTimer,
	status,
	visible,
	removeItems,
	setRemoveItems,
}) {
	const handleClick = (e) => {
		if (startTimer === "closed") {
			setTimer("start");
		}
		let num = Number.parseInt(e.target.alt);
		console.log(num);
		let id = e.target.id;
		console.log(e.target);
		let modifiedOjects = FinalNums.map((num) => {
			if (num.id == id) {
				return { ...num, status: "open" };
			}
			return num;
		});
		setFinalNums(modifiedOjects);
		if (SelectedNums.length === 0) {
			console.log("inital");
			let newSelectedNums = [...SelectedNums];
			newSelectedNums.push([num, id]);
			setSelectNums(newSelectedNums);
		} else {
			let popElement = SelectedNums.pop();
			setMoves( moves + 1);
			if (num == popElement[0] && id != popElement[1]) {
				let filteredArray = [...FinalNums];
				filteredArray = filteredArray.map((nums) => {
					if (nums.val == num || nums.val == num + 8) {
						console.log("change visibility");
						return { ...nums, status: "open", visible: false };
					} else {
						return nums;
					}
				});
				setTimeout(() => {
					setFinalNums(filteredArray);
					setRemoveItems((removeItems) => removeItems + 1);
				}, 500);
			} else {
				console.log("black out");
				setTimeout(() => {
					let modifiedOjects = FinalNums.map((num) => {
						return { ...num, status: "closed" };
					});
					setFinalNums(modifiedOjects);
				}, 1000);
				setSelectNums([]);
			}
		}
	};
	return (
		<div
			className={visible === true ? "card" : "card visibility"}
			onClick={handleClick}
		>
			<img
				className={"card-image"}
				src={`/assets/images/${status != "closed" ? value : "d"}.jpeg`}
				alt={value}
				id={id}
			/>
		</div>
	);
}

export default Card;
