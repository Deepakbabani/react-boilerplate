// src/store.ts
import { create } from "zustand";

// Define the types for the store
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the store with Zustand
const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
