import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

import TodoList from './TodoList/TodoList';
import InputField from './InputField/InputField';

// import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </>
  );
};
