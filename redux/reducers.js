import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages = [...state.messages, action.payload].slice(-10);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
