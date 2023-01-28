import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
});

export const { name: userSliceName, reducer: userSliceReducer } = userSlice;
