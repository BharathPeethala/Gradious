import React from "react";
import Card from "./components/Card";
import users from "./db/data.json";
function App() {
	return (
		<div className="App">
			{users.map((user) => (
				<Card user={user} />
			))}
		</div>
	);
}

export default App;
