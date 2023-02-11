import React, { useState } from 'react';
import style from './CounterComponent.module.scss';

type CounterPropsType = {
  title: string;
  count?: number;
};

// const calculateValue = () => {
//   console.log('calculate');
//   let result = 0;

//   for (let i = 0; i < 1000000000; i++) {
//     result += 1;
//   }

//   return result;
// };

const Counter = (props: CounterPropsType) => {
  const { title } = props;
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  // const someHeavyValue = useMemo(calculateValue, []);

  // console.log(someHeavyValue);

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

export const CounterComponent = React.memo(Counter, (prev, next) => prev.title === next.title);
