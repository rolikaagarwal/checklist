import React from "react";
import "./AddItems.css";
import { useState } from "react";

function AddItems() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function addTodo() {
    if (todo !== " ") {
      setTodos(...todos, todo);
      setTodo("");
    }
  }
  return (
    <div className="enter-item">
      <input
        type="text"
        placeholder="add item"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input type="button" value="add" onClick={addTodo} />
    </div>
  );
}
export default AddItems;
