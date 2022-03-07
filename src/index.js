import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
