import React from "react";
import { useCounter } from "../hooks/useCounter";

const Button = () => {
  const { counterValue, increase, decrease, setCounterValue } = useCounter();

  return (
    <div>
      <h2>Counter: {counterValue}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={() => setCounterValue(10)}>Set to 10</button>
    </div>
  );
};

export default Button;
