import { React, useState, useEffect } from "react";
import Card from "./Card";
import GameOver from "./GameOver";
import ResetGame from "./ResetGame";
function Board() {
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
	const [moves, setmoves] = useState(0);
	const [scores, setScores] = useState(1000);
	const [FinalNums, setFinalNums] = useState(nums);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [hours, setHours] = useState(0);
	const [startTime, setTimer] = useState("closed");
	const [selectedNums, setSelectNums] = useState([]);
	const [selectIds, setSelectIds] = useState([]);
	const [ColorFlag, setColorFlag] = useState(true);
	const [lowTime, setLowTime] = useState([1000, 1000, 1000]);
	const [intervalval, setIntervalval] = useState();
	const [removeItems, setRemoveItems] = useState(0);
	const setSelectedNums = (nums) => {
		return setSelectNums(nums);
	};
	const setFinaledNums = (nums) => {
		return setFinalNums(nums);
	};
	const setMoves = (moves) => {
		return setmoves(moves);
	};
	useEffect(() => {
		if (removeItems == 8) {
			if (moves >= 8 && moves < scores) {
				setScores(moves);
			}
			let totalTime = hours * 60 * 60 + minutes * 60 + seconds;
			if (totalTime < lowTime[0] * 60 * 60 + lowTime[1] * 60 + lowTime[2]) {
				setLowTime([hours, minutes, seconds]);
			}
		}
		if (startTime === "start") {
			runTime();
			setTimer("closed1");
		}
		if (startTime == "reset") {
			console.log(startTime);
			clearInterval(intervalval);
			setSeconds(0);
			setMinutes(0);
			setHours(0);
			setTimer("closed");
		}
	}, [removeItems, startTime, moves, hours, minutes, seconds]);
	const runTime = () => {
		let DummySecs;
		let DummyMinutes;
		let DummyHours;
		let interval = setInterval(() => {
			console.log("interval");
			console.log(seconds);
			setSeconds((seconds) => {
				DummySecs = seconds + 1;
				return seconds + 1;
			});
			if (DummySecs >= 59) {
				console.log("fkjaslkdfjaskl");
				setSeconds(() => {
					DummySecs = 0;
					return 0;
				});
				setMinutes((minutes) => {
					DummyMinutes = minutes + 1;
					return minutes + 1;
				});
			} else if (DummyMinutes >= 59) {
				setMinutes((minutes) => {
					DummyMinutes = minutes;
					return 0;
				});
				setHours((hours) => {
					DummyHours = hours;
					return hours + 1;
				});
			}
		}, 1000);
		setIntervalval(interval);
	};

	return (
		<div className="board-container">
			{removeItems < 8 ? (
				<div className="main-container">
					<div className="mini-board-container">
						{FinalNums.map(({ id, val, color, clicked, status, visible }) => (
							<Card
								id={id}
								value={val}
								color={color}
								FinalNums={FinalNums}
								SelectedNums={selectedNums}
								SelectIds={selectIds}
								ColorFlag={ColorFlag}
								setFinalNums={setFinaledNums}
								setSelectNums={setSelectedNums}
								setSelectIds={setSelectIds}
								setColorFlag={setColorFlag}
								setMoves={setMoves}
								moves={moves}
								clicked={clicked}
								startTimer={startTime}
								setTimer={setTimer}
								status={status}
								visible={visible}
								removeItems={removeItems}
								setRemoveItems={setRemoveItems}
							/>
						))}
					</div>
					<div className="heading-box">
						<div>
							<h1 className="LCU">LCU</h1>
						</div>
						<div>
							<h3>MOVES: {moves}</h3>
							<br />
							<h3>
								TIMER:{" "}
								<span id="hours">{hours < 10 ? "0" + hours : hours}</span>:
								<span id="minutes">
									{minutes < 10 ? "0" + minutes : minutes}
								</span>
								:
								<span id="seconds">
									{seconds < 10 ? "0" + seconds : seconds}
								</span>
							</h3>
							<br />
							<h3>HIGH SCORE: {scores === 1000 ? "0" : scores}</h3>
							<br />
							<h3>
								HIGH SCORE:{" "}
								<span id="low-hours">
									{lowTime[0] === 1000
										? "00"
										: lowTime[0] < 10
										? "0" + lowTime[0]
										: lowTime[0]}
								</span>
								:
								<span id="low-minutes">
									{lowTime[1] === 1000
										? "00"
										: lowTime[1] < 10
										? "0" + lowTime[1]
										: lowTime[1]}
								</span>
								:
								<span id="low-seconds">
									{lowTime[2] === 1000
										? "00"
										: lowTime[2] < 10
										? "0" + lowTime[2]
										: lowTime[2]}
								</span>
							</h3>
							<div>
								<ResetGame
									FinalNums={FinalNums}
									setFinalNums={setFinaledNums}
									setMoves={setMoves}
									setTimer={setTimer}
									setRemoveItems={setRemoveItems}
								/>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>
					<GameOver />
					<ResetGame
						FinalNums={FinalNums}
						setFinalNums={setFinaledNums}
						setMoves={setMoves}
						setTimer={setTimer}
						setRemoveItems={setRemoveItems}
					/>
				</div>
			)}
		</div>
	);
}

export default Board;
