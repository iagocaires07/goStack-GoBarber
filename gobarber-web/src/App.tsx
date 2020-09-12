import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';

import GlobalStyle from './styles/global';

import AppProvide from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvide>
      <Router />
    </AppProvide>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
