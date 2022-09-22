import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const Posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postLoading: (state, action) => {
      state.loading = action.payload;
    },
    postSuccess: () => {},
  },
});
