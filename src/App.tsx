import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';
import { Input } from './Input';

function App() {
  const handler = () => {
    console.log('КНОПКА БЫЛА НАЖАТА');
  };

  return (
    <div className="App">
      <CounterComponent title={'Orange'} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'} />

      <button onClick={handler}>PUSH ME</button>

      <Input />
    </div>
  );
}

export default App;
