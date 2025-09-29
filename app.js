const heading = React.createElement("h1", { id: "title" }, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "ad" }, "Hello World"), React.createElement("h2", { id: "sadasd" }, "Hello World h2")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", { id: "ad22" }, "Hello World"), React.createElement("h2", { id: "sada22sd" }, "Hello World h2")])]);
const task = ReactDOM.createRoot(document.getElementById("task"));
task.render(parent);
