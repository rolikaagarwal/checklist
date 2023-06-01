import React from "react";
import "./AddItems.css";
import { useState } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

function AddItems() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function addTodo() {
    if (todo !== " ") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }
  const deleteTodo = (text) => {
    const newTodo = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodo);
  };
  return (
    <div>
      <InputTodo todo={todo} addTodo={addTodo} setTodo={setTodo}></InputTodo>
      <TodoList deleteTodo={deleteTodo} todos={todos}></TodoList>
    </div>
  );
}
export default AddItems;
