import { useEffect, useState } from 'react';

export default function Timer({ initialTime, onTimeEnd, running, resetFlag }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Full reset when initialTime or resetFlag changes
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime, resetFlag]);

  // Timer logic
  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) {
      onTimeEnd();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeEnd();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running, timeLeft, onTimeEnd]);

  return (
    <div className="relative bg-indigo-900/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg border-2 border-indigo-400/50 w-72 mb-4">
      <div className="bg-gray-900 rounded-lg border-2 border-amber-300/30 p-3 font-mono text-amber-200">
        <div className="flex justify-between items-center">
          <span className="text-amber-300/70">TIME</span>
          <span className={`text-2xl ${timeLeft < 10 ? 'text-rose-400 animate-pulse' : ''}`}>
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}