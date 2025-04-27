import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Import the RootState type (type of the Redux store)
import { increment, decrement, setCounter } from '../store/slices/counterSlice';

// Custom hook for counter logic
export const useCounter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);

  const increase = () => {
    dispatch(increment());
  };

  const decrease = () => {
    dispatch(decrement());
  };

  const setCounterValue = (value: number) => {
    dispatch(setCounter(value));
  };

  return {
    counterValue,
    increase,
    decrease,
    setCounterValue,
  };
};
