import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './components/app';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
