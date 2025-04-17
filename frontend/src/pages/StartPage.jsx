import GameBoard from '../components/GameBoard/GameBoard';
import ScorePanel from '../components/ScorePanel';

export default function StartPage() {
    return (
        <div className="start-page">
            <h1>Balatro Card Game</h1>
            <p>
                Welcome to the ultimate card game experience!
            </p>
            <button 
                onClick={() => window.location.href = '/game'}>
                Start Game
            </button>
        </div>
    );
}