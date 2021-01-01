import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistGate } from 'redux-persist/integration/react'

import { store, persistor} from "./Redux/store"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <persistGate persistor={persistor}>
      <App />
      </persistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
