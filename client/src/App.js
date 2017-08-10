import React, { Component } from 'react';
import {DataProvider} from './container';
import { BrowserRouter as Router} from 'react-router-dom';


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
