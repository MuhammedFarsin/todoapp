import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task }) => {
  return (
    <div className="todo-item">
      <p>{task}</p>
      <div className="todo-actions">
        <i className="fas fa-edit">
          <FontAwesomeIcon icon={faEdit} />
        </i>
        <i className="fas fa-trash">
          <FontAwesomeIcon icon={faTrash} />
        </i>
      </div>
    </div>
  );
};

export default Todo;
