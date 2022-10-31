import { useState } from 'react';
import { nanoid } from 'nanoid';
import TodoList from './TodoList/TodoList';
import InputField from './InputField/InputField';

// import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          text,
          completed: false,
        },
      ]);
    }
    setText('');
  };
  const toggleTodoComplete = todoId => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return (
    <>
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </>
  );
};

// import About from './pages/About';
// import Blogpage from './pages/Blogpage';
// import Home from './pages/Home';
// import Notfoundpages from './pages/Notfoundpages';
// <header>
//     <Link to="/"></Link>
//     <Link to="/posts"></Link>
//     <Link to="/about"></Link>
//   </header>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/post" element={<Blogpage />} />
//     <Route path="*" element={<Notfoundpages />} />
//   </Routes>
