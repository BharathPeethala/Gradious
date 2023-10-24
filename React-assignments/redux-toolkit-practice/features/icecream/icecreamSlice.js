const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;
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
		builder.addCase(cakeActions.ordered, (state) => {
			state.noOfIcecreams--;
		});
	},
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
