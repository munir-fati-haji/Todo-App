import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

const Header = () => {
  const [mode, setMode] = useState(true);

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
          <button>+</button>
          <div className="add-todo">
            <input type="text" placeholder="Create a new todo" />
            <label htmlFor="">
              Set deadline <input type="date" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
