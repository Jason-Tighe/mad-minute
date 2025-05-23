import { useEffect, useState } from 'react';

export default function Timer({ initialTime, onTimeEnd, running, resetFlag }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime, resetFlag]);

  useEffect(() => {
    if (!running || timeLeft <= 0) return;
  
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeEnd?.();
          return 0;
        }
        return newTime;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, [running, onTimeEnd]);

  return (
    <div className="relative bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-300 w-72 mb-4">
      <div className="bg-slate-100 rounded-lg border border-emerald-300 p-3 font-mono text-slate-800">
        <div className="flex justify-between items-center">
          <span className="text-emerald-600">TIME</span>
          <span
            className={`text-2xl font-semibold ${
              timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-slate-900'
            }`}
          >
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}