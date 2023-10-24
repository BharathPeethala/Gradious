import React from "react";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";
import "./style/main";

function App() {
	return (
		<div>
			<CakeView />
			<IcecreamView />
			<UserView />
		</div>
	);
}

export default App;
