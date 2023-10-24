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
		},
		addUser: (state, action) => {
			state.push(action.payload)
			localStorage.setItem("Appointments", JSON.stringify(state));
		},
		deleteUser: (state, action) => {
			state.splice(action.payload, 1);
			localStorage.setItem("Appointments", JSON.stringify(state));

		},
		updateUser: (state, action) => {
				state[action.payload[0]] = action.payload[1];
				localStorage.setItem("Appointments", JSON.stringify(state));
		},
	},
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUser, setUsers } = userSlice.actions;
