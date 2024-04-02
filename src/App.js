import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (

    <div className="main-div">
      <h1>{count}</h1>
      <div className="buttons">        
        <button onClick={decrement} id='decrement-button'>-</button>
        <button onClick={increment} id='increment-button'>+</button>
      </div>
    </div>
  );
}

export default App;
