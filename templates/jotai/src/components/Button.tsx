import React from 'react';
import useCounter from '../hooks/useCounter';

const Button = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Button;
