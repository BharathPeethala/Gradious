import { createSlice } from "@reduxjs/toolkit";
import { appointment, initialStateType } from "../../Types/Appointment.types";
import { WritableDraft } from "immer/dist/internal";

const initialState: initialStateType = [];
const userSlice = createSlice({
	name: "Appointments",
	initialState,
	reducers: {
		setUsers: (state, action) => {
			if(state.length==0)
			{action.payload.map((data: WritableDraft<appointment>) => {
				state.push(data);
			});}
			console.log(state);
		},
		addUser: (state, action) => {
			let temp1: initialStateType = [];
			let appointments = localStorage.getItem("Appointments");
			console.log(appointments);
			if (appointments === null) {
				temp1 = [action.payload];
			} else {
				temp1 = JSON.parse(appointments);
				temp1 = [...temp1, action.payload];
			}
			state.push(action.payload)
			localStorage.setItem("Appointments", JSON.stringify(temp1));
		},
		deleteUser: (state, action) => {
			let appointments = localStorage.getItem("Appointments");
			if (appointments !== null) {
				state.splice(action.payload, 1);
				localStorage.setItem("Appointments", JSON.stringify(state));
			}
		},
		updateUser: (state, action) => {
			let appointments = localStorage.getItem("Appointments");
			console.log(action.payload)
			if (appointments !== null) {
				state[action.payload[0]] = action.payload[1];
				localStorage.setItem("Appointments", JSON.stringify(state));
			}
		},
	},
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUser, setUsers } = userSlice.actions;
