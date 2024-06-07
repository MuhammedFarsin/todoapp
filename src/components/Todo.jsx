import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo-item">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div className="todo-actions">
        <i className="fas fa-edit">
          <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(todo.id)} />
        </i>
        <i className="fas fa-trash">
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
        </i>
      </div>
    </div>
  );
};

export default Todo;
