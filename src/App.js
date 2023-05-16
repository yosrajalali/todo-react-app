import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Layout from './components/Layout';
import Header from './components/Header';
import Lists from './components/Lists';

function App() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const delHandler = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const doneHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const dublicateTodo = [...todos];

    dublicateTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };
    setTodos(dublicateTodo);
  };

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos'));

    if (getTodos) {
      setTodos(getTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo.length < 5) {
      setError('Enter at least 5 characters ');
      return false;
    }

    const updatedTodos = [
      ...todos,
      { id: Date.now(), title: todo, done: false },
    ];
    setTodos(updatedTodos);
    setError(null);
    setTodo('');
  };

  return (
    <Layout>
      <Header />
      <Form
        todo={todo}
        change={(e) => {
          setTodo(e.target.value);
        }}
        submit={submitHandler}
        error={error}
      />
      <Lists del={delHandler} done={doneHandler} todos={todos} />
    </Layout>
  );
}

export default App;
