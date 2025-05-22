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
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-indigo-400 flex flex-col items-center justify-start pt-4 relative">
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
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center" style={{ transform: 'translateY(-25%)', width: '400px' }}>
            <p className="mb-4 text-xl font-semibold">Game Over!</p>
            <p className="mb-6 text-3xl font-bold">{score}</p>
            <button onClick={resetGame} className="px-6 py-3 bg-amber-500 text-white rounded-lg text-lg">
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}