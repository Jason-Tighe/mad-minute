import { useState } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';
import ScorePanel from '../components/ScorePanel';

export default function Settings() {
  const [score, setScore] = useState(0);
  
  return (
    <div className="game-container">
    </div>
  );
}