import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './effects';

const initialState = {
  posts: [],
  loading: false,
  error: {},
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      return { ...state, posts: payload };
    });
    builder.addCase(fetchPosts.rejected, (state, { error }) => {
      return { ...state, error };
    });
  },
});

export const { name: postsSliceName, reducer: postsSliceReducer } = postsSlice;
