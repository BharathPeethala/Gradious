import { React, useState } from "react";
function TodoCard() {
	const [todoID, setTodoID] = useState(1002);
	const [Todos, setTodos] = useState([
		{
			id: 1001,
			todoCompleted: false,
			todoText: "Start Adding todos",
		},
	]);
	console.log(Todos);
	const addItem = () => {
		const newTodos = [...Todos];
		let value = document.getElementById("todo-input").value;
		document.getElementById("todo-input").value = "";
		if (value !== "") {
			newTodos.push({
				id: todoID,
				todoCompleted: false,
				todoText: value,
			});
			setTodos(newTodos);
			setTodoID(todoID + 1);
		}
	};
	const removeItem = (e) => {
		const id = Number.parseInt(e.target.id);
		const newTodos = Todos.map((todo) => {
			if (id == todo.id) {
				console.log({...todo});
				return { ...todo, todoCompleted: !todo.todoCompleted };
			}
			return todo;
		});
		setTodos(newTodos);
		let tempTodos = Todos.filter((todo) => {
			return id !== todo.id;
		});
		setTimeout(() => {
			setTodos(tempTodos);
		}, 1000);
	};
	return (
		<div className="todo-card">
			<h1>My Todo List</h1>
			{Todos.map((todo) => {
				return (
					<div className="todo-container">
						<input
							id={todo['id']}
							type="checkbox"
							onClick={removeItem}
							className="checkboxs"
							checked={todo.todoCompleted}

						/>
						<label className={todo.todoCompleted ? "strike" : ""} for={todo.id}>
							{todo.todoText}
						</label>
					</div>
				);
			})}
			<form onSubmit={(e) => e.preventDefault()}>
				<input type="text" id="todo-input" placeholder="Add a new todo" />
				<div className="button-container">
					<button className="btn-add" onClick={addItem}>
						Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default TodoCard;
