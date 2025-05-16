export default function ScorePanel({ score }) {
    return (
      <div className="relative bg-indigo-900/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg border-2 border-indigo-400/50 w-72 mb-4">
        <div className="bg-gray-900 rounded-lg border-2 border-amber-300/30 p-3 font-mono text-amber-200">
          <div className="flex justify-between items-center">
            <span className="text-amber-300/70">SCORE</span>
            <span className="text-2xl">{score}</span>
          </div>
        </div>
      </div>
    );
  }
  