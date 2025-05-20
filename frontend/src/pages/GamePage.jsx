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
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-indigo-400 flex flex-col items-center justify-start pt-8">
      <GameBoard
        onCorrectAnswer={handleCorrectAnswer}
        score={score}
        isGameActive={isGameActive}
        isGameOver={isGameOver}
        onTimeUp={handleTimeUp}
        resetFlag={resetTimerFlag}
      />
      {isGameOver && (
        <div className="text-center mt-4">
          <button onClick={resetGame} className="px-4 py-2 bg-amber-500 text-white rounded-lg">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}