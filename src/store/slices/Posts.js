import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postLoading: (state, action) => {
      state.loading = action.payload;
    },
    postSuccess: (state, action) => {
      state.posts = action.payload;
    },
    postError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { postError, postSuccess, postLoading } = PostsSlice.actions;
export default PostsSlice.reducer;
