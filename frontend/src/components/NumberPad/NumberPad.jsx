export default function NumberPad({ onButtonPress, currentInput, currentNumber }) {
    const buttonGroups = {
        numbers: [
          { display: '1', key: '1' }, 
          { display: '2', key: '2' },
          { display: '3', key: '3' },
          { display: '4', key: '4' },
          { display: '5', key: '5' },
          { display: '6', key: '6' },
          { display: '7', key: '7' },
          { display: '8', key: '8' },
          { display: '9', key: '9' },
          { display: '0', key: '0' },
          { display: '.', key: '.' },
        ],
        operations: [
          { display: '+', key: '+' },
          { display: '-', key: '-' },
          { display: '×', key: '*' }, 
          { display: '÷', key: '/' },
          { display: '=', key: 'Enter' }
        ],
        utilities: [
          { display: 'C', key: 'Escape' },
          { display: '±', key: '_' },
          { display: '⌫', key: 'Backspace' }
        ]
      };

  
  return (
    <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-300 overflow-hidden w-72">
    {/* Display Panel */}
      <div className="mb-4 p-3 bg-slate-100 rounded-lg border border-emerald-400 font-mono text-2xl text-slate-800 h-16 flex items-center justify-between overflow-x-auto">
        <span className="text-emerald-600">
          {currentNumber}
        </span>      
        <span>
          {currentInput || '0'}
        </span>
      </div>
    
      {/* Calculator Body */}
      <div className="relative">
        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(rgba(0,0,0,0.05)_0px_0px,_rgba(0,0,0,0.025)_0px_1px] opacity-20"></div>
    
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-3">
    
          {/* Utility Buttons */}
          <div className="col-span-3 grid grid-cols-3 gap-3">
            {buttonGroups.utilities.map(util => (
              <button
                key={util.key}
                onClick={() => onButtonPress(util.key)}
                className="bg-red-500 hover:bg-red-400 active:bg-red-600 text-white font-bold py-3 rounded-lg transition-all 
                          active:scale-95 shadow-md hover:shadow-red-500/30 border-b-4 border-red-700 active:border-b-0"
              >
                {util.display}
              </button>
            ))}
          </div>
    
          {/* Division Button */}
          <button
            onClick={() => onButtonPress('/')}
            className="bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all 
                      active:scale-95 shadow-md hover:shadow-emerald-500/30 border-b-4 border-emerald-700 active:border-b-0"
          >
            ÷
          </button>
    
          {/* Number Buttons */}
          <div className="col-span-3 grid grid-cols-3 gap-3">
            {buttonGroups.numbers.slice(0, 9).map(btn => (
              <button
                key={btn.key}
                onClick={() => onButtonPress(btn.key)}
                className="bg-slate-200 hover:bg-slate-100 active:bg-slate-300 text-slate-900 font-bold py-3 rounded-lg transition-all
                          active:scale-95 shadow-md hover:shadow-slate-500/10 border-b-4 border-slate-400 active:border-b-0"
              >
                {btn.display}
              </button>
            ))}
    
            {/* 0 Button (spans two columns) */}
            <button
              onClick={() => onButtonPress('0')}
              className="bg-slate-200 hover:bg-slate-100 active:bg-slate-300 text-slate-900 font-bold py-3 rounded-lg transition-all
                        active:scale-95 shadow-md hover:shadow-slate-500/10 border-b-4 border-slate-400 active:border-b-0 col-span-2"
            >
              0
            </button>
    
            {/* Decimal Button */}
            <button
              onClick={() => onButtonPress('.')}
              className="bg-slate-200 hover:bg-slate-100 active:bg-slate-300 text-slate-900 font-bold py-3 rounded-lg transition-all
                        active:scale-95 shadow-md hover:shadow-slate-500/10 border-b-4 border-slate-400 active:border-b-0"
            >
              .
            </button>
          </div>
    
          {/* Operations */}
          <div className="grid grid-rows-4 gap-3">
            {['*', '-', '+'].map((op) => (
              <button
                key={op}
                onClick={() => onButtonPress(op)}
                className="bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all 
                          active:scale-95 shadow-md hover:shadow-emerald-500/30 border-b-4 border-emerald-700 active:border-b-0"
              >
                {op === '*' ? '×' : op}
              </button>
            ))}
            <button
              onClick={() => onButtonPress('Enter')}
              className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all 
                        active:scale-95 shadow-md hover:shadow-emerald-500/30 border-b-4 border-emerald-800 active:border-b-0"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}