import React, { useState } from "react";

function TodoForm(props) {
	const [input, setInput] = useState("");

	const createChange = (e) => {
		setInput(e.target.value);
	};

	const createSubmit = (e) => {
		e.preventDefault();

		// props.onSubmit({
		// 	id: Math.floor(Math.random() * 10000),
		// 	text: input,
		// });
		setInput("");
	};
	return (
		<form className="todo-form" onClick={createSubmit}>
			<input
				type="text"
				placeholder="Add todo"
				value={input}
				name="text"
				className="todo-input"
				onChange={createChange}
			/>
			<button className="todo-button">Add todo</button>
		</form>
	);
}

export default TodoForm;
