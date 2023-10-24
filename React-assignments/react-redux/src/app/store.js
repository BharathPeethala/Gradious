import { configureStore} from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
// import { createLogger } from "redux-logger";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const logger = createLogger();
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: userReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
