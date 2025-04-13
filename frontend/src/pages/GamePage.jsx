import { useState } from 'react';
import GameBoard from '../components/GameBoard';
import ScorePanel from '../components/ScorePanel';
import NumberPad from '../components/NumberPad';

export default function GamePage() {
  const [score, setScore] = useState(0);
  
  // things to add to this. 
    // 1. Add a timer to the game
    // 2. Add a game over screen
    // 3. Need an input field to enter the answer
    // 4. Need a 
  return (
    <div className="game-container">
      <NumberPad onButtonClick={(number) => console.log(number)} />
      <ScorePanel score={score} />
      <GameBoard onCorrectAnswer={() => setScore(s => s + 1)} />

    </div>
  );
}