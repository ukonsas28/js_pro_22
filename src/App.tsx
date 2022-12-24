import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';

function App() {
  return (
    <div className="App">
      <CounterComponent title={'Orange'} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'} />
    </div>
  );
}

export default App;
