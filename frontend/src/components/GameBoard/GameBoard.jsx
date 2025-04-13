import React, { useState, useEffect } from 'react';
import NumberPad from '../NumberPad/NumberPad';
import styles from './GameBoard.module.css';

export default function GameBoard({ onCorrectAnswer }) {
  const [input, setInput] = useState('');
  const [currentNumber, setCurrentNumber] = useState(0);
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleButtonPress = (key) => {
    switch(key) {
      // Number keys
      case '0': case '1': case '2': case '3': case '4':
      case '5': case '6': case '7': case '8': case '9':
        setInput(prev => prev + key);
        break;
        
      // Operations
      case '+': case '-': case '*': case '/':
        setInput(prev => prev + ` ${key} `);
        break;
        
      // Utilities
      case 'Backspace':
        setInput(prev => prev.slice(0, -1));
        break;
      case 'Escape':
        setInput('');
        break;
      case '_':
        setInput(prev => prev.startsWith('-') ? prev.slice(1) : `-${prev}`);
        break;
        
      // Calculate
      case 'Enter':
        try {
          const expression = currentNumber + (input.startsWith('+') || 
                           input.startsWith('-') || 
                           input.startsWith('*') || 
                           input.startsWith('/') ? '' : '+') + input;
          const result = eval(expression);
          
          setCurrentNumber(result);
          setInput(''); 

          if (result === targetNumber) {
            onCorrectAnswer();
            setTargetNumber(generateRandomNumber());
            setCurrentNumber(result);
          }
        } catch {
          console.error("c'mon man");
        }
        break;
    }
  };

  // i need to change this so that the current number is the result of the last operation
  // and that it's the starting value so the user doesn't need to retype it
  console.log('currentNumber', currentNumber);
  console.log('targetNumber', targetNumber);
  console.log('input', input);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if (key === 'Enter' || key === 'Escape' || key === 'Backspace') {
        event.preventDefault();
      }
      handleButtonPress(key);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);



  return (
    <div className="game-board">
      <div className="display">
        <div>Target: {targetNumber}</div>
        <div>Current: {currentNumber}</div>
        <div className="input">{input}</div>
      </div>
      <NumberPad onButtonPress={handleButtonPress} />
    </div>
  );
}