import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import textSlice from './slices/textSlice';
import PostsSlice from './slices/Posts';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textSlice,
    posts: PostsSlice,
  },
});
