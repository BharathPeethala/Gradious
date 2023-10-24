import React, { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
function UserView() {
	const dispatch = useDispatch();
	const usersData = useSelector((state) => state.user);
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);
	return (
		<div>
			{usersData.loading && <div>Loading</div>}
			{!usersData.loading && usersData.error ? (
				<div>{usersData.error}</div>
			) : null}
			{!usersData.loading && usersData.data ? (
				<div>
					{usersData.data.map((user) => {
						return <h6>{user.name}</h6>;
					})}
				</div>
			) : null}
		</div>
	);
}

export default UserView;
