import { useState } from 'react';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const [warn, setWarn] = useState(null);
  const handelTodos = (e) => {
    const inputValue = e.target.value;
    const handelWorn = inputValue.includes('.js') ? 'explor more js ' : null;
    setTodo(inputValue);
    setWarn(handelWorn);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name='todos' value={todo} onChange={handelTodos} />
      </p>
      <p>{warn || 'good choice'}</p>
    </div>
  );
};

export default Todos;
