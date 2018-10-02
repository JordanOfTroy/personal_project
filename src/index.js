import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './Store'

ReactDOM.render(

<Provider store = {store}>
  <App />
</Provider>

, document.getElementById('root'));
unregister();
