import { useState } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';
import ScorePanel from '../components/ScorePanel';

export default function GamePage() {
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(false); // Start inactive
    const [gameStarted, setGameStarted] = useState(false); // Track first match

    const handleCorrectAnswer = () => {
        if (!gameStarted) {
            setGameStarted(true);
            setGameActive(true);
        }
        setScore(s => s + 1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-400 to-indigo-400 flex flex-col items-center justify-start pt-8">
            <ScorePanel score={score} />
            <GameBoard 
                onCorrectAnswer={handleCorrectAnswer} 
                active={gameActive}
            />
        </div>
    );
}