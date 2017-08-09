import React, { Component } from 'react';
import {ShopContainer} from './container';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
          <Router>
            <ShopContainer />
          </Router>
    );
  }
}

export default App;
