export default function GameBoard({ onCorrectAnswer }) {
    const handleCorrect = () => {
      onCorrectAnswer();
    };
  
    return (
      <div className="game-board">
        <button onClick={handleCorrect}>Correct Answer</button>
      </div>
    );
  }