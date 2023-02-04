import React from 'react';
import style from './OnePost.module.scss';

type OnePostPropsType = {
  title: string;
  body: string;
};

export const OnePost = ({ body, title }: OnePostPropsType) => {
  return (
    <div className={style.wrapper}>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};
