import React from "react";
import { useState } from "react";

const TodoEditForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task );

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit" className="submit-btn">
        Update
      </button>
    </form>
  );
};

export default TodoEditForm;
