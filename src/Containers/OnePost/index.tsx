import React from 'react';
import { OnePostContent } from 'Components/OnePostContent';
import { useParams } from 'react-router-dom';

export const OnePost = () => {
  const { postId } = useParams();
  console.log(postId);

  return <OnePostContent title="test" body="test" />;
};
