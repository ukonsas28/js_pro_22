import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from './effects';
import { OnePostType } from './types';

const initialState = {
  posts: [] as OnePostType[],
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
    builder.addCase(fetchPosts.fulfilled, (state, { payload }: PayloadAction<OnePostType[]>) => {
      return { ...state, posts: payload, loading: false };
    });
    builder.addCase(fetchPosts.rejected, (state, { error }) => {
      return { ...state, error, loading: false };
    });
  },
});

export const { name: postsSliceName, reducer: postsSliceReducer } = postsSlice;
