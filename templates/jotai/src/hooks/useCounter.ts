import { useCounterAtom } from '../atoms/useCounterAtom'; // Import the counter atom

const useCounter = () => {
  const [count, setCount] = useCounterAtom(); // Use the counter atom

  // Function to increment the counter
  const increment = () => setCount(count + 1);

  // Function to decrement the counter
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

export default useCounter;
