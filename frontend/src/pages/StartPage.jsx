import { useNavigate } from 'react-router-dom';

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-400 flex flex-col items-center justify-center p-4">
      <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-300 max-w-md w-full">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(rgba(0,0,0,0.03)_0px_0px,_rgba(0,0,0,0.01)_0px_1px)] opacity-10 rounded-xl"></div>
    
        <div className="bg-slate-100 rounded-lg border border-emerald-400 p-4 mb-8 font-mono text-center">
          <h1 className="text-emerald-600 text-4xl font-bold mb-2">MAD MINUTE</h1>
          <p className="text-slate-700 text-lg">Math Challenge</p>
        </div>
    
        <button 
          onClick={() => navigate('/game')}
          className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold text-xl py-4 px-6 rounded-lg 
                    transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-emerald-500/30
                    border-b-4 border-emerald-700 active:border-b-0 mb-6"
        >
          START GAME
        </button>
    
        <div className="grid grid-cols-2 gap-3">
          <button 
            className="bg-slate-300 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-lg transition-all border-b-4 border-slate-400 active:border-b-0"
            onClick={() => navigate('/how-to-play')}>
            How To Play
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 rounded-lg transition-all border-b-4 border-blue-700 active:border-b-0"
            onClick={() => navigator.share && navigator.share({ title: 'Mad Minute', text: 'Check out this fun math challenge!', url: window.location.href })}>
            Share
          </button>
        </div>
    
        <div className="mt-8 pt-4 border-t border-slate-300">
          <p className="text-slate-600 text-center text-sm">
            Created by <span className="text-emerald-600 font-medium">Jason Tighe</span>
          </p>
          <p className="text-slate-600 text-center text-sm mt-2">
            <a 
              href="https://your-portfolio-link.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              Check out some of my other projects
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}