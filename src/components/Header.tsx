import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import axios from "axios";

const Header = () => {
  const [mode, setMode] = useState(true);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleClick = () => {
    setMode(mode ? false : true);
    document.documentElement.style.setProperty(
      "--main-color",
      mode ? "#24273d" : "#f5f5f5"
    );
    document.documentElement.style.setProperty(
      "--background-color",
      mode ? "#000" : "#fff"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      mode ? "#fff" : "#000"
    );
  };
  const post = () => {
    axios
      .post("http://localhost:8080/api/v1/todo/", {
        title,
        done: false,
        deadline: `${deadline} 12:00`,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Header">
      <div className="transparent-background">
        <div className="title">
          <h1>TODO</h1>
          <h1 className="mode" onClick={handleClick}>
            {mode ? <MdDarkMode /> : <BsSunFill />}
          </h1>
        </div>
        <form>
          <button onClick={post}>+</button>
          <div className="add-todo">
            <input
              type="text"
              placeholder="Create a new todo"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="">
              Set deadline{" "}
              <input
                type="date"
                name="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
