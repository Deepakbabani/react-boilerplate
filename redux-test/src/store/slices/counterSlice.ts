import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define initial state
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setCounter } = counterSlice.actions;
export default counterSlice.reducer;
