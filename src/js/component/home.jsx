import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div id="container">
			<h1 className="todo-header">todos</h1>
			<input id="addToDo" type="text" placeholder="Add to do here" />
			<ul className="list-group">
				<li className="list-group-item">
					<span>
						<FontAwesomeIcon icon={faX} />
					</span>{" "}
					Walk the dog
				</li>
				<li className="list-group-item">
					<span>
						<FontAwesomeIcon icon={faX} />
					</span>{" "}
					Buy superpowers
				</li>
				<li className="list-group-item">
					<span>
						<FontAwesomeIcon icon={faX} />
					</span>{" "}
					Invest life savings into NFT's
				</li>
			</ul>
		</div>
	);
};

export default Home;

//hard coded bootstrap/ html output
