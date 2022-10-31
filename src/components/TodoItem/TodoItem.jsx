const TodoItem = ({ id, text, completed, toggleTodoComplete, removeTodo }) => {
  return (
    <li className="List-Todos__item" key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span className="Todos-text">{text}</span>
      <span>{id}</span>
      <span
        onClick={() => {
          removeTodo(id);
        }}
      >
        &times;
      </span>
    </li>
  );
};
export default TodoItem;
