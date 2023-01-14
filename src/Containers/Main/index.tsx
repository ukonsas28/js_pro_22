import { Footer } from 'Components/Common/Footer';
import { Header } from 'Components/Common/Header';
import { Content } from 'Components/Main/Content';
import React from 'react';

export const Main = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
