import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

// Redux store which contains all of the slices
const store = configureStore({
  reducer: {
    counter: counterReducer, // Adding the counter slice to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
