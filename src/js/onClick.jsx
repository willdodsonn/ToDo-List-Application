import React, { useState } from 'react';

state = {
    value: "",
};


const toDo = () => {
    return (
        <div className="todoListBox">
            <div id="container">
                <h1 className="todo-header">todos</h1>
                <input id="addToDo" type="text" placeholder="Add to do here"  onChange={() => this.setState({value})}/>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span>Walk the dog</span> <FontAwesomeIcon icon={faX}  onClick={() => setItem("yellow")}/>
                    </li>
                    <li className="list-group-item">
                        <span> Buy superpowers</span>{" "}
                        <FontAwesomeIcon icon={faX}  onClick={() => setItem("yellow")}/>
                    </li>
                    <li className="list-group-item">
                        <span> Invest life savings into NFT's</span>{" "}
                        <FontAwesomeIcon icon={faX}  onClick={() => setItem("yellow")}/>
                    </li>
                </ul>
                <div
                    onChange={() => setItem("faX")}
                    className={
                        "light red " + (item === "red" ? " glow" : "")
                    }></div>
                <div
                    onClick={() => setItem("yellow")}
                    className={
                        "light yellow" + (item === "yellow" ? " glow" : "")
                    }></div>

            </div>
        </div>
    );
};