import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts, fetchOnePosts } from './effects';
import { OnePostType } from './types';

const initialState = {
  posts: [] as OnePostType[],
  onePost: { body: '', title: '', id: 0, userId: 0 },
  loading: false,
  error: {},
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // postList
    builder.addCase(fetchPosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }: PayloadAction<OnePostType[]>) => {
      return { ...state, posts: payload, loading: false };
    });
    builder.addCase(fetchPosts.rejected, (state, { error }) => {
      return { ...state, error, loading: false };
    });
    // onePost
    builder.addCase(fetchOnePosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchOnePosts.fulfilled, (state, { payload }: PayloadAction<OnePostType>) => {
      return { ...state, onePost: payload, loading: false };
    });
    builder.addCase(fetchOnePosts.rejected, (state, { error }) => {
      return { ...state, error, loading: false };
    });
  },
});

export const { name: postsSliceName, reducer: postsSliceReducer } = postsSlice;
