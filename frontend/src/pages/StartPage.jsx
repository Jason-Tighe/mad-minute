import GameBoard from '../components/GameBoard/GameBoard';
import ScorePanel from '../components/ScorePanel';

export default function StartPage() {
    return (
      <div className="start-page min-h-screen bg-gradient-to-br from-purple-500 to-indigo-700 flex flex-col items-center justify-center p-8 text-center">
        {/* Main content */}
        <div className="max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border-2 border-white/20 animate-fade-in">
          {/* Title with fun animation */}
          <h1 className="text-6xl font-bold text-white mb-4 font-[Poppins] animate-bounce">
            Mad Minute
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-8 font-light">
            The ultimate math challenge!<br />
            Can you solve equations under pressure?
          </p>
          
          {/* Start button */}
          <button 
            onClick={() => window.location.href = '/game'}
            className="bg-amber-400 hover:bg-amber-300 text-indigo-900 font-bold text-xl py-4 px-8 rounded-full 
                      transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/50
                      border-2 border-amber-500 mb-8"
          >
            START GAME
          </button>
          
          {/* Attribution */}
          <p className="text-white/70 text-sm mb-6">
            Created by <span className="font-medium text-white">Jason Tighe</span>
          </p>
          
          {/* Social links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://yourportfolio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-500 p-3 rounded-full transition-colors duration-300"
              aria-label="Portfolio"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Fun decorative elements */}
        <div className="absolute top-8 right-8 text-4xl">🧮</div>
        <div className="absolute bottom-8 left-8 text-4xl">⏱️</div>
      </div>
    );
  }