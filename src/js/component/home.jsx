import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
//include images into your bundle

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = React.useState("");
	return (
		<div className="todoListBox">
			<div id="container">
				<h1 className="todo-header">todos</h1>
				<button type="submit">ADD</button>
				<input
					id="addToDo"
					type="text"
					placeholder="Add to do here"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>
				<ul className="list-group">
					<li className="list-group-item">
						<span> Walk the dog</span>{" "}
						<FontAwesomeIcon icon={faX} className="icon" />
					</li>
					<li className="list-group-item">
						<span> Buy superpowers</span>{" "}
						<FontAwesomeIcon icon={faX} className="icon" />
					</li>
					<li className="list-group-item">
						<span> Invest life savings into NFT's</span>{" "}
						<FontAwesomeIcon icon={faX} className="icon" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;

//hard coded bootstrap/ html output
