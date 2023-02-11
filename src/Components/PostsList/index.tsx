import React, { useRef } from 'react';
import { OnePostType } from 'Store/Posts/types';
import { ListItem } from './ListItem';
import style from './PostsList.module.scss';

type PostListPropsType = {
  postsData: OnePostType[];
};

export const PostsList = ({ postsData }: PostListPropsType) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handler = () => {
    if (ref.current) {
      ref.current.classList.add(style.new);
      ref.current?.scroll(0, 0);
    }
  };

  return (
    <main className={style.wrapper}>
      <h1>POSTS</h1>
      <button type="button" onClick={handler}>
        SCROLL TOP
      </button>
      <div ref={ref} className={style.posts}>
        {postsData.map((el) => (
          <ListItem key={el.id} title={el.title} body={el.body} id={el.id} />
        ))}
      </div>
    </main>
  );
};
