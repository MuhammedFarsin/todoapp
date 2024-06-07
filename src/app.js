import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./components/Todo";
import TodoWrapper from "./components/TodoWrapper";
import Body from "./components/Body";

const App = () => {
    return(
        <div className="App">
            <TodoWrapper />
            <Body />
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
