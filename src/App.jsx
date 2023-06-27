import { useState } from 'react';
import danone from './assets/danone-logo-rectangle.jpeg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={danone} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Danone</h1>
    </>
  );
}

export default App;
