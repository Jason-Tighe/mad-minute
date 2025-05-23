export default function ScorePanel({ score }) {
    return (
      <div className="relative bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-300 w-72 mb-4">
        <div className="bg-slate-100 rounded-lg border border-emerald-300 p-3 font-mono text-slate-800">
          <div className="flex justify-between items-center">
            <span className="text-emerald-600">SCORE</span>
            <span className="text-2xl font-semibold text-slate-900">{score}</span>
          </div>
        </div>
      </div>
    );
  }
  