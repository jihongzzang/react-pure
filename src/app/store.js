import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';

// export default configureStore({ reducer: { counter: counterReducer } });

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
