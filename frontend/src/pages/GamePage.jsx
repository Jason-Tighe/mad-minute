import React, { useState } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [resetTimerFlag, setResetTimerFlag] = useState(0); // for Timer key

  const handleCorrectAnswer = () => {
    if (!isGameActive) {
      setIsGameActive(true);
      setResetTimerFlag(prev => prev + 1); // reset Timer on first answer
    }
    setScore(prev => prev + 1);
  };

  const handleTimeUp = () => {
    setIsGameActive(false);
    setIsGameOver(true);
  };

  const resetGame = () => {
    setScore(0);
    setIsGameOver(false);
    setIsGameActive(false);
    setResetTimerFlag(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-400 flex flex-col items-center justify-start pt-4 relative">
      <div className="relative" style={{ transform: 'translateX(-150px)' }}>
        <GameBoard
          onCorrectAnswer={handleCorrectAnswer}
          score={score}
          isGameActive={isGameActive}
          isGameOver={isGameOver}
          onTimeUp={handleTimeUp}
          resetFlag={resetTimerFlag}
        />
      </div>
      {isGameOver && (
        <div className="absolute inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center">
          <div 
            className="bg-white p-10 rounded-2xl shadow-xl text-center w-96"
            style={{ transform: 'translateY(-25%)' }}
          >
            <p className="mb-4 text-xl font-semibold text-emerald-700">Game Over!</p>
            <p className="mb-6 text-4xl font-extrabold text-slate-900">{score}</p>
            <button 
              onClick={resetGame} 
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-lg font-semibold transition"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}