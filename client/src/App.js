import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import DataProvider from './container/shop/DataProvider'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <DataProvider />
      </Router>
    );
  }
}

export default App;
