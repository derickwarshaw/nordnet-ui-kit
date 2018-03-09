    const { symbols } = require('./badge.sketch'); // symbols
    
    <div>
      {symbols.map(({ symbol, entity }) => (
        <div data-sketch-symbol={symbol} key={symbol}>{entity}</div>
      ))}
    </div>