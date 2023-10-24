import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	noOfIcecreams: 200,
};
const icecreamSlice = createSlice({
	name: "icecream",
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.noOfIcecreams -= action.payload;
		},
		restocked: (state, action) => {
			state.noOfIcecreams += action.payload;
		},
	},
	// extraReducers: {
	// 	["cake/ordered"]: (state) => {
	// 		state.noOfIcecreams -= 1;
	// 	},
	// },
	extraReducers: (builder) => {
		builder.addCase(cakeOrdered, (state) => {
			state.noOfIcecreams--;
		});
	},
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
