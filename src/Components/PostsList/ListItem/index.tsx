import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.module.scss';

type ListItemPropsType = {
  title: string;
  body: string;
  id: number;
};

export const ListItem = ({ body, title, id }: ListItemPropsType) => {
  return (
    <div className={style.wrapper}>
      <Link to={`/posts/${id}`}>
        <h4>{title}</h4>
      </Link>
      <p>{body}</p>
    </div>
  );
};
