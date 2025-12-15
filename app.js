import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Akshay is here...</h1>;
const headingNew = <h1>Hi Akshay...</h1>;
const task = ReactDOM.createRoot(document.getElementById("task"));
const newtask = ReactDOM.createRoot(document.getElementById("newtask"));
task.render(heading);
newtask.render(headingNew);
