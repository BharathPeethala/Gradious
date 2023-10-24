const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
	require("./features/icecream/icecreamSlice").icecreamActions;

const fetchUsers = require("./features/user/userSlice").userActions;

console.log(cakeActions);
console.log("Intial State", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered(12));
// store.dispatch(cakeActions.ordered(10));
// store.dispatch(cakeActions.ordered(2));
// store.dispatch(cakeActions.restocked(12));
// store.dispatch(icecreamActions.ordered(10));
// store.dispatch(icecreamActions.ordered(20));
// store.dispatch(icecreamActions.ordered(21));
// store.dispatch(icecreamActions.restocked(12));

store.dispatch(fetchUsers());

unsubscribe();
