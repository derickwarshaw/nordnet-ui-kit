import React from 'react';
import Alert from './alert';

// eslint-disable-next-line import/prefer-default-export
export const symbols = [
  {
    symbol: 'Alert/default',
    entity: <Alert header="Alert">Alert text</Alert>,
  },
  {
    symbol: 'Alert/vertical',
    entity: (
      <Alert header="Alert vertical" vertical>
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/info',
    entity: (
      <Alert modifier="info" header="Alert">
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/success',
    entity: (
      <Alert modifier="success" header="Alert">
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/warning',
    entity: (
      <Alert modifier="warning" header="Alert">
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/danger',
    entity: (
      <Alert modifier="danger" header="Alert">
        Alert text
      </Alert>
    ),
  },
];
