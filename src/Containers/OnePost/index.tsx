import React, { useEffect } from 'react';
import { OnePostContent } from 'Components/OnePostContent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostsEffects, PostsSelectors } from 'Store';

export const OnePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(PostsSelectors.getOnePostsData);

  useEffect(() => {
    if (postId) {
      dispatch(PostsEffects.fetchOnePosts(postId));
    }
  }, [postId]);

  return <OnePostContent title={postData.title} body={postData.body} />;
};
