import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", complited: false },
  { id: "todo-2", name: "Repeat", complited: false },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
