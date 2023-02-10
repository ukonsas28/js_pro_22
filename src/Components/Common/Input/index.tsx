import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputProps = {
  name: string;
  value?: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const Component = ({ changeHandler, value = '', name, type = 'text' }: InputProps) => {
  console.log(name, 'input');
  return (
    <div className={style.wrapper}>
      <span>{name}</span>
      <input value={value} onChange={changeHandler} type={type} />
    </div>
  );
};
export const Input = React.memo(Component);
