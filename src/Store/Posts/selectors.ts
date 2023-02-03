import { RootStateType } from '../configureStore';

export const getPosts = (state: RootStateType) => state.postsSlice.posts;
