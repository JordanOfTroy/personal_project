import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import {Provider} from 'react-redux'
import Store from './Store'

ReactDOM.render(

<Provider stpre = {Store}>
  <App />
</Provider>

, document.getElementById('root'));
unregister();
