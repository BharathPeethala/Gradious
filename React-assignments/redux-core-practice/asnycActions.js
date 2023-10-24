const axios = require("axios");
const redux = require("redux");
const logger = require("redux-logger").logger;
const thunk = require("redux-thunk").default;

const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;

const intialState = {
	loading: false,
	data: [],
	error: "",
};

// actions

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const fetchUserRequest = () => {
	return {
		type: FETCH_USER_REQUEST,
	};
};

const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USER_SUCCESS,
		payload: users,
	};
};
const fetchUsersError = (error) => {
	return {
		type: FETCH_USER_ERROR,
		payload: error,
	};
};

const fetchUsers = () => {
	return function (dispatch) {
		dispatch(fetchUserRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users11")
			.then((response) => {
				const users = response.data.map((user) => user.name);
				// console.log(users);
				dispatch(fetchUsersSuccess(users));
			})
			.catch((error) => {
				dispatch(fetchUsersError(error.message));
			});
	};
};

// reducers

const reducer = (state = intialState, action) => {
	console.log(action.type);
	switch (action.type) {
		case FETCH_USER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USER_SUCCESS:
			return {
				loading: false,
				data: action.payload,
				error: "",
			};
		case FETCH_USER_ERROR:
			return {
				loading: false,
				data: [],
				error: action.payload,
			};
		default:
			break;
	}
};

// async actions

// store
const Store = createStore(reducer, applyMiddleware(thunk));

Store.subscribe(() => {
	console.log(Store.getState());
});

Store.dispatch(fetchUsers());

// console.log(intialState);
