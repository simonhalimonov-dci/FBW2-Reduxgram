import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
// Create the store with the reducer
import store from './Store'
// Import React Redux
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </ Provider >, 
  document.getElementById('root'));

registerServiceWorker();
