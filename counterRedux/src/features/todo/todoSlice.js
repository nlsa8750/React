import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 5
}

const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      }
    }
  });

export const { increment, decrement } = todoSlice.actions;

export default todoSlice.reducer;