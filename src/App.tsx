import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
