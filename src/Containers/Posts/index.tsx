import { Footer } from 'Components/Common/Footer';
import { Header } from 'Components/Common/Header';
import { PostsList } from 'Components/Posts';
import React from 'react';

export const Posts = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <PostsList />
      <Footer />
    </div>
  );
};
