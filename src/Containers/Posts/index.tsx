import { PostsList } from 'Components/PostsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsEffects, PostsSelectors } from 'Store';

export const Posts = () => {
  const loading = useSelector(PostsSelectors.getPostLoading);
  const postsData = useSelector(PostsSelectors.getPostsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostsEffects.fetchPosts());
  }, []);

  return loading ? <h1>Loading....</h1> : <PostsList postsData={postsData} />;
};
