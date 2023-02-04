import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from 'Helpers/Network';

export const fetchPosts = createAsyncThunk('posts/all', async () => {
  const { data } = await networkInstance.get('/posts');
  return data;
});
