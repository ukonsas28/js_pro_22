// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useLayoutEffect, useState } from 'react';
import style from './CounterComponent.module.scss';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
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
        <button disabled={count === 10} onClick={incrementHandler}>
          add
        </button>
      </div>
    </div>
  );
};

export const CounterComponent = React.memo(Counter, (prev, next) => {
  if (prev.title === 'Apple111') {
    return true;
  } else {
    return false;
  }
});
