import React from 'react';
import style from './PostsList.module.scss';

export const PostsList = () => {
  return (
    <main className={style.wrapper}>
      <h1>POSTS</h1>
      <div className={style.posts}>
        <p>POST1</p>
        <p>POST2</p>
        <p>POST3</p>
        <p>POST4</p>
        <p>POST5</p>
        <p>POST6</p>
      </div>
    </main>
  );
};
