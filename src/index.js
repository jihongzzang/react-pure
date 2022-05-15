import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './app/store';

import GlobalStyle from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
