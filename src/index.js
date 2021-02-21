import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import cardsReducer from './store/cards';
import authReducer from './store/auth';
import { logger } from '../src/store/middleware';

const combinedReducer = combineReducers({
  cards: cardsReducer,
  auth: authReducer
});

const store = createStore(combinedReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
