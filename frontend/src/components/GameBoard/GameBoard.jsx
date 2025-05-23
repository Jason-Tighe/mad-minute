import React, { useState, useEffect } from 'react';
import NumberPad from '../NumberPad/NumberPad';
import { evaluate } from 'mathjs';
import Timer from '../Timer/Timer';
import ScorePanel from '../ScorePanel.jsx';
// frontend/src/components/ScorePanel.jsx

export default function GameBoard({ onCorrectAnswer, score, isGameActive, isGameOver, onTimeUp, resetFlag }) {
  const [input, setInput] = useState('');
  const [currentNumber, setCurrentNumber] = useState(0);
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  console.log(isGameOver)
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
      
      case '.':
        setInput(prev => {
          const lastToken = prev.trim().split(/[\s+*/-]/).pop();
            if (lastToken.includes('.')) return prev;
            return prev + '.';
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
          const cleanInput = input.replace(/\s+/g, '');
      
          if (!cleanInput) {
            // If input is empty, do nothing
            return;
          }
      
          let expression;
      
          // Starts with operator: apply to currentNumber
          if (/^[+\-*/]/.test(cleanInput)) {
            expression = `${currentNumber}${cleanInput}`;
          } else {
            expression = `${currentNumber}+${cleanInput}`;
          }
      
          const result = evaluate(expression);
          const formattedResult = parseFloat(result.toFixed(6));
      
          setCurrentNumber(formattedResult);
          setInput('');
      
          const isCloseEnough = Math.abs(formattedResult - targetNumber) < 0.0001;
      
          if (isCloseEnough) {
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
    <div className="game-board p-4 my-24 bg-transparent w-full h-full flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-start space-y-6 mr-6">
        <Timer
          initialTime={60}
          onTimeEnd={onTimeUp}
          running={isGameActive}
          resetFlag={resetFlag}
        />
        <ScorePanel score={score} />
      </div>

      <div className="h-full flex flex-col items-center justify-center p-4">
        <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-300 w-72 mb-6">
          <div className="bg-slate-100 rounded-lg border border-emerald-400 p-4 font-mono text-slate-800 text-center">
            <div className="text-emerald-600 text-sm tracking-wide mb-1">TARGET</div>
            <div className="text-4xl font-bold tracking-widest">{targetNumber}</div>
          </div>
        </div>

        <NumberPad
          onButtonPress={handleButtonPress}
          currentInput={input}
          currentNumber={currentNumber}
        />
      </div>
    </div>
  );
}