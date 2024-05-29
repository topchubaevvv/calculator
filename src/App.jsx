import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [number, setNumber] = useState('')

  const handleNumberClick = (num) => {
    setNumber(prev => prev + num);
  };

  const handleOperationClick = (operator) => {
    setNumber(prev => prev + operator)
  };

  const handleClearClick = () => {
    setNumber('');
    setResult('');
  };

  const handleEqualsClick = () => {
    console.log(number)

    if (number.includes("+")) {
      let e = number.split("+").map(n => Number(n));
      console.log(e)
      const azamat = e [0] + e [1]
      setResult(azamat)
      setNumber(azamat)
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      { <div className="result">Result: {result}</div> }

      <div className="buttons">
        <div className='o0'>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperationClick('+')}>+</button>
        </div>
        <div className='o1'>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        </div>
        <div className='o2'>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperationClick('*')}>*</button>
        </div>
        <div className='o3'>
        <div className='hppp'><button onClick={() => handleNumberClick('0')}>0</button></div>
        <button onClick={() => handleOperationClick('.')}>.</button>
        <button onClick={() => handleEqualsClick('=')}>=</button>
        <button onClick={() => handleOperationClick('/')}>/</button>
        </div>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default App;
