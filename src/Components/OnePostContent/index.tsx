import React from 'react';
import { Link } from 'react-router-dom';
import style from './OnePostContent.module.scss';

type OnePostContentPropsType = {
  title: string;
  body: string;
};

export const OnePostContent = ({ body, title }: OnePostContentPropsType) => {
  return (
    <div className={style.wrapper}>
      <h4>{title}</h4>
      <p>{body}</p>
      <Link to={'/posts'}> К списку постов</Link>
    </div>
  );
};
