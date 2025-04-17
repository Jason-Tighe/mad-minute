export default function NumberPad({ onButtonPress }) {
    const buttonGroups = {
        numbers: [
          { display: '7', key: '7' }, 
          { display: '8', key: '8' },
          { display: '9', key: '9' },
          { display: '4', key: '4' },
          { display: '5', key: '5' },
          { display: '6', key: '6' },
          { display: '1', key: '1' },
          { display: '2', key: '2' },
          { display: '3', key: '3' },
          { display: '0', key: '0' },
          { display: '.', key: '.' },
          { display: '⌫', key: 'Backspace' }
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
          { display: '±', key: '_' }
        ]
      };

    return (
    <div >
      {/* Numbers */}
      <div className="number-buttons">
        {buttonGroups.numbers.map((btn) => (
          <button
            key={btn.key}
            data-key={btn.key}
            onClick={() => onButtonPress(btn.key)}
            aria-label={`${btn.display} (Press ${btn.key})`}
          >
            {btn.display}
          </button>
        ))}
      </div>

      {/* Operations */}
      <div className="operation-buttons">
        {buttonGroups.operations.map((op) => (
          <button
            key={op.key}
            data-key={op.key}
            onClick={() => onButtonPress(op.key)}
            aria-label={`${op.display} (Press ${op.key})`}
          >
            {op.display}
          </button>
        ))}
      </div>

      {/* Utilities */}
      <div className="utility-buttons">
        {buttonGroups.utilities.map((util) => (
          <button
            key={util.key}
            onClick={() => onButtonPress(util.key)}
            aria-label={`${util.display} (Press ${util.key})`}
          >
            {util.display}
          </button>
        ))}
      </div>
    </div>
  );
}