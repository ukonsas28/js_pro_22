import { configureStore } from '@reduxjs/toolkit';
import { UserReducer, UserSliceName } from './User/slice';

export const store = configureStore({
  reducer: {
    [UserSliceName]: UserReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
