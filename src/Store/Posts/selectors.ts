import { RootStateType } from './../configureStore';

export const getPostsData = (state: RootStateType) => state.postsSlice.posts;

export const getPostLoading = (state: RootStateType) => state.postsSlice.loading;
