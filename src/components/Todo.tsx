import React from "react";
import { BsTrash } from "react-icons/bs";

const Todo = () => {
  const todos = [
    "Complete Javascript",
    "Read for one hour",
    "Meditation",
    "Code",
  ];
  const todoList = todos.map((todo, index) => (
    <div className="todo" key={`todo-${index}`}>
      <div>
        <input type="checkbox" name="" id={`todo-${index}`} />
        <label htmlFor={`todo-${index}`}>{todo}</label>
      </div>
      <div>
        <p className="delete">
          <BsTrash />
        </p>
      </div>
    </div>
  ));
  return (
    <div className="todo-list">
      <div className="container">
        {todoList}
        <div className="footer">
          <p>4 items</p>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
