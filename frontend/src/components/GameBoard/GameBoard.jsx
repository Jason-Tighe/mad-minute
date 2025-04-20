import React, { useState, useEffect } from 'react';
import NumberPad from '../NumberPad/NumberPad';
import { evaluate } from 'mathjs';

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
        setInput(prev => {
          if (prev.endsWith(' ')) {
            return prev.trim() + key;
          }
          return prev + key;
        });
        break;
        
      // Operations
      case '+': case '-': case '*': case '/':
        setInput(prev => {
          // Don't allow double operators
          if (prev.endsWith(' ')) return prev;
          return prev + ` ${key} `;
        });
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
          // Remove all whitespace first
          const cleanInput = input.replace(/\s+/g, '');
          
          // If empty input, use currentNumber directly
          if (!cleanInput) {
            if (currentNumber === targetNumber) {
              onCorrectAnswer();
              setTargetNumber(generateRandomNumber());
            }
            return;
          }
      
          // Build expression properly
          let expression;
          if (/^[+\-*/]/.test(cleanInput)) {
            // If input starts with operator, apply to currentNumber
            expression = `${currentNumber}${cleanInput}`;
          } else {
            // Otherwise treat as continuation (default to addition)
            expression = `${currentNumber}+${cleanInput}`;
          }
      
          // Safer evaluation using mathjs
          const result = evaluate(expression);
          const formattedResult = parseFloat(result.toFixed(6));
      
          setCurrentNumber(formattedResult);
          setInput('');
      
          if (formattedResult === targetNumber) {
            onCorrectAnswer();
            setTargetNumber(generateRandomNumber());
          }
        } catch (error) {
          console.error("Calculation error:", error.message);
          setInput('ERR');
          setTimeout(() => setInput(''), 1000);
        }
        break;
    }
  };


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
    <div className="game-board  bg-red-400 w-full h-full flex flex-col items-center justify-center">
      <div className=" bg-yellow-400">
        <div>Target: {targetNumber}</div>
        {/* <div>Current: {currentNumber}</div> */}
        {/* <div className="input bg-orange-400">{input}</div> */}
      </div>
      <div className="h-full bg-green-400 flex items-center justify-center p-4">        
        <NumberPad onButtonPress={handleButtonPress} currentInput={input} currentNumber={currentNumber}/>
      </div>
    </div>
  );
}