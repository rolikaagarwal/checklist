import React from "react";
import "./AddItems.css";
import { useState } from "react";

function AddItems() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function addTodo() {
    if (todo !== " ") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }
  const deleteTodo = (text) =>{
    const newTodo = todos.filter((todo)=> {
        return todo!==text;
    });
    setTodos(newTodo);

  };
  return (
    <div>
      <div className="enter-item">
        <input
          type="text"
          placeholder="add item"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="button" value="add" onClick={addTodo} />
      </div>

      <div className="display-list">
        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <div className="todo">
                <li key={index}> {todo} </li>

                <button className="delete-button" onClick={()=> deleteTodo(todo)}>Delete</button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default AddItems;
