import { RootStateType } from '../configureStore';

export const getUserEmail = (state: RootStateType) => state.userSlice.email;

export const getUserLoading = (state: RootStateType) => state.userSlice.loading;
