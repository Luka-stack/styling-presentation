import React from 'react';

import CssExample from './css-example';
import ScssExample from './scss-example';

export default function app() {
  const pathname = window.location.pathname;

  if (pathname === '/css') {
    return <CssExample />;
  }

  if (pathname === '/scss') return <ScssExample />;

  return 'WRONG PATH';
}
