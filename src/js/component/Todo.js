//hard coded bootstrap/ html output
import React, { useState } from "react";
import TodoForm from "./TodoForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Todo(todos, completeTodo) {
	const [edit, setEdit] = {
		id: null,
		value: "",
	};

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.test}
			</div>
			<div className="icons">
				<FontAwesomeIcon icon={faX} />
			</div>
		</div>
	));
}

export default Todo;
