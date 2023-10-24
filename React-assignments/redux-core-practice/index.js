const redux = require("redux");
const logger = require("redux-logger");
const promise = require("redux-promise-middleware");
const reduxDevTools = require("redux-devtools-extension");

// const thunk = require("redux-thunk");
const createStore = redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const middleWareLogger = logger.logger;

const intialCakeState = {
	noOfCakes: 100,
};
const intialIcecreamState = {
	noOfIceCreams: 100,
};

// actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake(quantity) {
	return {
		type: CAKE_ORDERED,
		payload: quantity,
	};
}

function restockCake(quantity) {
	return {
		type: CAKE_RESTOCK,
		payload: quantity,
	};
}

function orderIcecream(quantity) {
	return {
		type: ICECREAM_ORDERED,
		payload: quantity,
	};
}

function restockIcecream(quantity) {
	return {
		type: ICECREAM_RESTOCK,
		payload: quantity,
	};
}

// reducers
const cakeReducer = (state = intialCakeState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state,
				noOfCakes: state.noOfCakes - action.payload,
			};
		case CAKE_RESTOCK: {
			return {
				...state,
				noOfCakes: state.noOfCakes + action.payload,
			};
		}
		default:
			return state;
	}
};

const icecreamReducer = (state = intialIcecreamState, action) => {
	switch (action.type) {
		case ICECREAM_ORDERED:
			return {
				...state,
				noOfIceCreams: state.noOfIceCreams - action.payload,
			};
		case ICECREAM_RESTOCK: {
			return {
				...state,
				noOfIceCreams: state.noOfIceCreams + action.payload,
			};
		}
		default:
			return state;
	}
};

// store
const rootReducer = combineReducers({
	cake: cakeReducer,
	icecream: icecreamReducer,
});

const Store = createStore(rootReducer, applyMiddleware(middleWareLogger));

// console.log(applyMiddleware(logger))
console.log("intial state", Store.getState());

const unsubscribe = Store.subscribe(() => {});

Store.dispatch(orderCake(10));
Store.dispatch(orderIcecream(10));
// Store.dispatch(orderCake(20));
// Store.dispatch(restockCake(4));

// or

// const actions = bindActionCreators({ orderCake, restockCake }, Store.dispatch);
// actions.orderCake(50);
// actions.restockCake(20);

unsubscribe();
