import React from 'react';
import { OnePostType } from 'Store/Posts/types';
import { ListItem } from './ListItem';
import style from './PostsList.module.scss';

type PostListPropsType = {
  postsData: OnePostType[];
};

export const PostsList = ({ postsData }: PostListPropsType) => {
  return (
    <main className={style.wrapper}>
      <h1>POSTS</h1>
      <div className={style.posts}>
        {postsData.map((el) => (
          <ListItem key={el.id} title={el.title} body={el.body} id={el.id} />
        ))}
      </div>
    </main>
  );
};
