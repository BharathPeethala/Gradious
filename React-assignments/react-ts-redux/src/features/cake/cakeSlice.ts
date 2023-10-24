import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	noOfCakes: number;
};
const initialState: InitialState = {
	noOfCakes: 100,
};

const cakeSlice = createSlice({
	name: "cake",
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.noOfCakes -= action.payload;
		},
		restocked: (state, action) => {
			state.noOfCakes += action.payload;
		},
	},
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
