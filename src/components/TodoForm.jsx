import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="what is the task for today?"
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit" className="submit-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
