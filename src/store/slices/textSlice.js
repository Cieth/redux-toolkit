import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeText } = textSlice.actions;
export default textSlice.reducer;
