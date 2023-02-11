import { useToggle } from 'Helpers/Hooks';
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

  const { flag, toggle, open, close } = useToggle(true);

  return (
    <main className={style.wrapper}>
      <h1>POSTS</h1>
      <button type="button" onClick={toggle}>
        TOGGLE CONTENT
      </button>
      <button type="button" onClick={open}>
        OPEN CONTENT
      </button>
      <button type="button" onClick={close}>
        CLOSE CONTENT
      </button>
      <button type="button" onClick={handler}>
        SCROLL TOP
      </button>
      {flag ? (
        <div ref={ref} className={style.posts}>
          {postsData.map((el) => (
            <ListItem key={el.id} title={el.title} body={el.body} id={el.id} />
          ))}
        </div>
      ) : (
        <h1>POSTS CLOSE</h1>
      )}
    </main>
  );
};
