import React, { useState, useEffect } from 'react';
import NumberPad from '../NumberPad/NumberPad';
import { evaluate } from 'mathjs';
import Timer from '../Timer/Timer';
import ScorePanel from '../ScorePanel.jsx';
// frontend/src/components/ScorePanel.jsx

export default function GameBoard({ onCorrectAnswer, score }) {
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
    <div className="game-board p-4 my-24 from-teal-400 to-indigo-400 w-full h-full flex flex-row items-center justify-center">
      {/* Sidebar with target, score, and timer */}
      <div className="flex flex-col items-center justify-start space-y-6 mr-6">
        <Timer initialTime={60} />
        <div className="relative bg-indigo-800/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border-2 border-amber-300/50 w-72">
          <div className="bg-gray-900 rounded-lg border-2 border-amber-400/40 p-4 font-mono text-amber-200 text-center">
            <div className="text-amber-300/80 text-sm tracking-wide mb-1">TARGET</div>
            <div className="text-4xl font-bold tracking-widest">{targetNumber}</div>
          </div>
        </div>
        <ScorePanel score={score} />
      </div>
      {/* Game board content */}
      <div className="h-full flex items-center justify-center p-4">
        <NumberPad onButtonPress={handleButtonPress} currentInput={input} currentNumber={currentNumber} />
      </div>
    </div>
  );
}