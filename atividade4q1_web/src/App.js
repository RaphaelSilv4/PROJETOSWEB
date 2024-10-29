import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (isRunning) {
          setCount(prevCount => prevCount + 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, [isRunning]); 
    const stopCounter = () => {
      setIsRunning(false);
    };
  
    const startCounter = () => {
      setIsRunning(true);
    };
  
    return (
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={isRunning ? stopCounter : startCounter}>
          {isRunning ? 'Parar' : 'Iniciar'}
        </button>
      </div>
    );
  };
export default App;
