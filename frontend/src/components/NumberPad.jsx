export default function NumberPad({ onButtonClick }) {
    const buttonGroups = {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '⌫'],
        operations: ['+', '-', '×', '÷', '='],
        utilities: ['C', '±']
      };

  return (
    <div className="calculator-grid">
      {/* Numbers (0-9, ., ⌫) */}
      <div className="number-buttons">
        {buttonGroups.numbers.map((btn) => (
          <button 
            key={btn} 
            onClick={() => onButtonClick(btn)}
            onKeyDown={() => onButtonClick(btn)}
            className={btn === '⌫' ? 'backspace' : ''}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Operations (+, -, ×, ÷, =) */}
      <div className="operation-buttons">
        {buttonGroups.operations.map((op) => (
          <button 
            key={op} 
            onClick={() => onButtonClick(op)}
            className="operation"
          >
            {op}
          </button>
        ))}
      </div>

      {/* Utilities (Clear, Negate) */}
      <div className="utility-buttons">
        {buttonGroups.utilities.map((util) => (
          <button
            key={util}
            onClick={() => onButtonClick(util)}
            className="utility"
          >
            {util}
          </button>
        ))}
      </div>
    </div>
  );
}