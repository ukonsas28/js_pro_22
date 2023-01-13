import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterComponent } from './CounterComponent';
import { Input } from './Input';

function App() {
  const handler = () => {
    console.log('КНОПКА БЫЛА НАЖАТА');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <CounterComponent title={'Orange'} />
            <CounterComponent title={'Apple'} count={4} />
            <CounterComponent title={'Lemon'} />

            <button onClick={handler}>PUSH ME</button>

            <Input />
            <Link to={'/main'}>main</Link>

            {/* <img src={assetsImage} alt="img" />

      <img src={'/images/img.jpeg'} alt="img" />

      <div className="example">HELLO WORLD</div> */}
          </div>
        }
      />

      <Route
        path="/main"
        element={
          <div className="App">
            <img src={'/images/img.jpeg'} alt="img" />
            <Link to={'/'}>root</Link>
            <div className="example">HELLO WORLD</div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
