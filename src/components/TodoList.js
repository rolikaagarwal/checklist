function TodoList({ todos, deleteTodo }) {
  return (
    <>
      <div className="display-list">
        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <div className="todo">
                <li key={index}> {todo} </li>

                <button
                  className="delete-button"
                  onClick={() => deleteTodo(todo)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoList;
