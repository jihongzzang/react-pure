import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './FinalSection/store';
import { OlContextProvider } from './FinalSection/OlcontextProvider';

ReactDOM.render(
  <React.StrictMode>
    <OlContextProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </OlContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
