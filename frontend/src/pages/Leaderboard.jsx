import { useState } from 'react';
import GameBoard from '../components/GameBoard';
import ScorePanel from '../components/ScorePanel';

export default function Leaderboard() {
  const [score, setScore] = useState(0);
  
  return (
    <div className="game-container">
      <ScorePanel score={score + 1000} />
      <GameBoard onCorrectAnswer={() => setScore(s => s + 1)} />
    </div>
  );
}