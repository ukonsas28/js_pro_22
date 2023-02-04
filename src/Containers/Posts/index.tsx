import { PostsList } from 'Components/PostsList';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostsEffects } from 'Store';

export const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostsEffects.fetchPosts());
  }, []);

  return <PostsList />;
};
