    const { symbols } = require('./flag.sketch'); // symbols
    
    <div>
      {symbols.map(({ symbol, entity }) => (
        <div data-sketch-symbol={symbol}>{entity}</div>
      ))}
    </div>