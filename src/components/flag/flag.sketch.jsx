import React from 'react';
import Flag from './flag';

// eslint-disable-next-line import/prefer-default-export
export const symbols = [
  {
    symbol: 'Flag',
    entity: <Flag size={32} countryCode="se" />,
  },
  {
    symbol: 'Flag/round',
    entity: <Flag size={32} countryCode="se" round />,
  },
  {
    symbol: 'Flag/currencies',
    entity: <Flag size={64} countryCode="eu" secondaryCountryCode="se" />,
  },
];
