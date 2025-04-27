import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const value = useMemo(() => ({ count, increment, decrement }), [count]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
