import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../store/todoSlice';
const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className="List-Todos__item" key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <span className="Todos-text">{text}</span>
      <span>{id}</span>
      <span
        onClick={() => {
          dispatch(removeTodo({ id }));
        }}
      >
        &times;
      </span>
    </li>
  );
};
export default TodoItem;
