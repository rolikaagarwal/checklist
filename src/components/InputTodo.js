function InputTodo({ todo, setTodo, addTodo }) {
  return (
    <>
      <div className="enter-item">
        <input
          type="text"
          placeholder="add item"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="button" value="add" onClick={addTodo} />
      </div>
    </>
  );
}

export default InputTodo;
