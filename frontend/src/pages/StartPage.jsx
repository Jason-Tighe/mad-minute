import { useNavigate } from 'react-router-dom';

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-indigo-900 flex flex-col items-center justify-center p-4">
      {/* Main container with calculator-inspired design */}
      <div className="relative bg-indigo-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-indigo-400/50 max-w-md w-full">
        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(rgba(0,0,0,0.1)_0px_0px,_rgba(0,0,0,0.05)_0px_1px] opacity-30 rounded-xl"></div>
        
        {/* Title display - styled like calculator screen */}
        <div className="bg-gray-800 rounded-lg border-2 border-amber-300/30 p-4 mb-8 font-mono text-center">
          <h1 className="text-amber-200 text-4xl font-bold mb-2">MAD MINUTE</h1>
          <p className="text-amber-300/80 text-lg">Math Challenge</p>
        </div>

        {/* Start button - matches calculator buttons */}
        <button 
          onClick={() => navigate('/game')}
          className="w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-indigo-900 font-bold text-xl py-4 px-6 rounded-lg 
                    transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-amber-500/30
                    border-b-4 border-amber-700 active:border-b-0 mb-6"
        >
          START GAME
        </button>

        {/* Secondary buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-indigo-200 hover:bg-indigo-100 text-indigo-900 font-bold py-2 rounded-lg transition-all border-b-4 border-indigo-400 active:border-b-0">
            How To Play
          </button>
          <button className="bg-indigo-200 hover:bg-indigo-100 text-indigo-900 font-bold py-2 rounded-lg transition-all border-b-4 border-indigo-400 active:border-b-0">
            High Scores
          </button>
          <button className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 rounded-lg transition-all border-b-4 border-rose-700 active:border-b-0">
            Settings
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-indigo-400/30">
          <p className="text-amber-200/70 text-center text-sm">
            Created by <span className="text-amber-300">Jason Tighe</span>
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="https://linkedin.com" className="text-amber-200/80 hover:text-amber-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{/* LinkedIn icon */}</svg>
            </a>
            <a href="https://github.com" className="text-amber-200/80 hover:text-amber-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{/* GitHub icon */}</svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}