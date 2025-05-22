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
    <div className="relative bg-indigo-900/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border-2 border-indigo-400/50 overflow-hidden w-72">
      <div className="mb-4 p-3 bg-gray-900 rounded-lg border-2 border-amber-300/30 font-mono text-2xl text-amber-200 h-16 flex items-center justify-between overflow-x-auto">
      <span className="text-amber-300/70">
        {currentNumber}
      </span>      
      <span>
        {currentInput || '0'}
      </span>
    </div>

      {/* Calculator body */}
      <div className="relative">
        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(rgba(0,0,0,0.1)_0px_0px,_rgba(0,0,0,0.05)_0px_1px] opacity-30"></div>
        
        {/* Main grid layout */}
        <div className="grid grid-cols-4 gap-3">
          {/* Utility buttons (top row) */}
          <div className="col-span-3 grid grid-cols-3 gap-3">
            {buttonGroups.utilities.map(util => (
              <button
                key={util.key}
                onClick={() => onButtonPress(util.key)}
                className="bg-rose-500 hover:bg-rose-400 active:bg-rose-600 text-white font-bold py-3 rounded-lg transition-all 
                           active:scale-95 shadow-md hover:shadow-rose-500/30 border-b-4 border-rose-700 active:border-b-0"
              >
                {util.display}
              </button>
            ))}
          </div>

          {/* First operation button (top right) */}
          <button
            onClick={() => onButtonPress('/')}
            className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold py-3 rounded-lg transition-all 
                       active:scale-95 shadow-md hover:shadow-amber-500/30 border-b-4 border-amber-700 active:border-b-0"
          >
            ÷
          </button>

          {/* Number pad rows */}
          <div className="col-span-3 grid grid-cols-3 gap-3">
            {/* Row 1: 7 8 9 */}
            {buttonGroups.numbers.slice(0, 3).map(btn => (
              <button
                key={btn.key}
                onClick={() => onButtonPress(btn.key)}
                className="bg-indigo-200 hover:bg-indigo-100 active:bg-indigo-300 text-indigo-900 font-bold py-3 rounded-lg transition-all
                           active:scale-95 shadow-md hover:shadow-indigo-500/20 border-b-4 border-indigo-400 active:border-b-0"
              >
                {btn.display}
              </button>
            ))}

            {/* Row 2: 4 5 6 */}
            {buttonGroups.numbers.slice(3, 6).map(btn => (
              <button
                key={btn.key}
                onClick={() => onButtonPress(btn.key)}
                className="bg-indigo-200 hover:bg-indigo-100 active:bg-indigo-300 text-indigo-900 font-bold py-3 rounded-lg transition-all
                           active:scale-95 shadow-md hover:shadow-indigo-500/20 border-b-4 border-indigo-400 active:border-b-0"
              >
                {btn.display}
              </button>
            ))}

            {/* Row 3: 1 2 3 */}
            {buttonGroups.numbers.slice(6, 9).map(btn => (
              <button
                key={btn.key}
                onClick={() => onButtonPress(btn.key)}
                className="bg-indigo-200 hover:bg-indigo-100 active:bg-indigo-300 text-indigo-900 font-bold py-3 rounded-lg transition-all
                           active:scale-95 shadow-md hover:shadow-indigo-500/20 border-b-4 border-indigo-400 active:border-b-0"
              >
                {btn.display}
              </button>
            ))}

            {/* Row 4: 0 . */}
            <button
              onClick={() => onButtonPress('0')}
              className="bg-indigo-200 hover:bg-indigo-100 active:bg-indigo-300 text-indigo-900 font-bold py-3 rounded-lg transition-all
                         active:scale-95 shadow-md hover:shadow-indigo-500/20 border-b-4 border-indigo-400 active:border-b-0 col-span-2"
            >
              0
            </button>
            <button
              onClick={() => onButtonPress('.')}
              className="bg-indigo-200 hover:bg-indigo-100 active:bg-indigo-300 text-indigo-900 font-bold py-3 rounded-lg transition-all
                         active:scale-95 shadow-md hover:shadow-indigo-500/20 border-b-4 border-indigo-400 active:border-b-0"
            >
              .
            </button>
          </div>

          {/* Operation buttons column (right side) */}
          <div className="grid grid-rows-4 gap-3">
            <button
              onClick={() => onButtonPress('*')}
              className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold py-3 rounded-lg transition-all 
                         active:scale-95 shadow-md hover:shadow-amber-500/30 border-b-4 border-amber-700 active:border-b-0"
            >
              ×
            </button>
            <button
              onClick={() => onButtonPress('-')}
              className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold py-3 rounded-lg transition-all 
                         active:scale-95 shadow-md hover:shadow-amber-500/30 border-b-4 border-amber-700 active:border-b-0"
            >
              -
            </button>
            <button
              onClick={() => onButtonPress('+')}
              className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold py-3 rounded-lg transition-all 
                         active:scale-95 shadow-md hover:shadow-amber-500/30 border-b-4 border-amber-700 active:border-b-0 row-span-1"
            >
              +
            </button>
            <button
              onClick={() => onButtonPress('Enter')}
              className="bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white font-bold py-3 rounded-lg transition-all 
                         active:scale-95 shadow-md hover:shadow-amber-500/30 border-b-4 border-amber-800 active:border-b-0 row-span-1"
            >
              =
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}