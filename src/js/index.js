//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

// let input = document.querySelector("input");
// input.addEventListener("change", function () {
// 	var ul = document.querySelector("ul");
// 	var li = document.createElement("li");
// 	var span = document.querySelector("span");
// 	var clone = span.cloneNode(true);
// 	clone.addEventListener("click", function (e) {
// 		var li = e.currentTarget.parentNode.parentNode;
// 		li.parentNode.removeChild(li);
// 	});
// 	var text = document.createTextNode(input.value);
// 	li.appendChild(clone);
// 	li.appendChild(text);
// 	ul.appendChild(li);
// });

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
