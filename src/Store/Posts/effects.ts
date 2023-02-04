import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from 'Helpers/Network';

export const fetchPosts = createAsyncThunk('posts/all', async () => {
  const { data } = await networkInstance.get('/posts');
  return data;
});

export const fetchOnePosts = createAsyncThunk('posts/byId', async (id: string) => {
  const { data } = await networkInstance.get(`/posts/${id}`);
  return data;
});
