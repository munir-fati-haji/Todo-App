import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

const Todo = () => {
  const endpoint = "http://localhost:8080/api/v1/todo/";

  const [data, setData] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:8080/api/v1/todo/${id}`);
  };

  const handleCheckbox = (id: number, data: any) => {
    axios.put(`http://localhost:8080/api/v1/todo/${id}`, {
      id: data.id,
      done: !data.done,
      deadline: data.deadline,
      title: data.title,
    });
  };

  useEffect(() => {
    axios
      .get(endpoint)
      .then((respose) => respose.data)
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error("err"));
    setList(todoList);
  }, []);

  const todoList = data.map((todo, index) => (
    <div className="todo" key={`todo-${index}`}>
      <div>
        <input
          defaultChecked={todo.done}
          type="checkbox"
          name=""
          id={`todo-${index}`}
          onClick={() => handleCheckbox(todo.id, todo)}
        />
        <label htmlFor={`todo-${index}`}>{todo.title}</label>
      </div>
      <div>
        <button
          className="delete"
          onClick={() => handleDelete(todo.id)}
          type="submit"
        >
          <BsTrash />
        </button>
      </div>
    </div>
  ));
  const activeList = todoList.filter((todo) => {
    return !todo.props.children[0].props.children[0].props.defaultChecked;
  });

  const completedList = todoList.filter((todo) => {
    return todo.props.children[0].props.children[0].props.defaultChecked;
  });

  return (
    <div className="todo-list">
      <div className="container">
        {list}
        <div className="footer">
          <p>{list.length} items</p>
          <div>
            <button onClick={() => setList(todoList)}>All</button>
            <button onClick={() => setList(activeList)}>Active</button>
            <button onClick={() => setList(completedList)}>Completed</button>
          </div>
          <button>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
