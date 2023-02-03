import { PostsList } from 'Components/PostsList';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostsSliceActions } from 'Store';

export const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostsSliceActions.fetchPosts());
  }, []);

  return <PostsList />;
};
