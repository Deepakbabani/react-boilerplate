import React from "react";
import useStore from "../store/useStore";

const Button = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Button;
