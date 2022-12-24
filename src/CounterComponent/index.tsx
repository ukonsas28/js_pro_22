import React from 'react';
import './counter.css';

type CounterPropsType = {
  title: string;
  count?: number;
};

export const CounterComponent = (props: CounterPropsType) => {
  const { title, count = 0 } = props;

  return (
    <div className="counter_wrapper">
      <h1>{title}</h1>
      <h2>{count}</h2>
    </div>
  );
};
