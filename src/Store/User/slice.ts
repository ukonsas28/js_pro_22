import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData(
      state,
      { payload: { email, token } }: PayloadAction<{ email: string; token: string }>,
    ) {
      return { ...state, email, token };
    },
  },
});

export const {
  name: userSliceName,
  reducer: userSliceReducer,
  actions: UserSliceActions,
} = userSlice;
