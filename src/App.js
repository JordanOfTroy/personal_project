import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import router from './Routes'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header/>
          {router}
          <Footer/>
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
