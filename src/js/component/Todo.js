//hard coded bootstrap/ html output
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Todo({ todos, completeTodo, removeTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitEdit = (value) => {
		editTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	// if (edit.id) {
	// 	return <TodoForm edit={edit} onSubmit={submitEdit} />;
	// }

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<div className="icons">
				<FontAwesomeIcon
					onClick={() => removeTodo(todo.id)}
					icon={faX}
					className="delete-icon"
				/>
			</div>
		</div>
	));
}

export default Todo;
