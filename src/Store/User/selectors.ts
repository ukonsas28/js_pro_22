import { RootStateType } from '../configureStore';

export const getUserToken = (state: RootStateType) => state.userState.token;

export const getUserEmail = (state: RootStateType) => state.userState.email;

export const getUserLoading = (state: RootStateType) => state.userState.loading;
