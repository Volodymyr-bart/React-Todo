import { useSelector } from 'react-redux';
import TodoItem from 'components/TodoItem/TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          // toggleTodoComplete={toggleTodoComplete}
          // removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
