import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { email: '', token: '', loading: false };

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserData(
      state,
      { payload: { email, token } }: PayloadAction<{ email: string; token: string }>,
    ) {
      return { ...state, email, token };
    },

    setLoading(state, { payload }: PayloadAction<boolean>) {
      return { ...state, loading: payload };
    },
  },
});

export const { name: UserSliceName, reducer: UserReducer, actions: UserActions } = userSlice;
