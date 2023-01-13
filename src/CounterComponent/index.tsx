import React, { useState } from 'react';
import style from './counter.module.scss';

type CounterPropsType = {
  title: string;
  count?: number;
};

export const CounterComponent = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={style.counter_wrapper}>
      <h1>{title}</h1>
      <div className={style.counter_group}>
        <button disabled={count === 0} onClick={decrementHandler}>
          remove
        </button>
        <h2>{count}</h2>
        <button onClick={incrementHandler}>add</button>
      </div>
    </div>
  );
};
