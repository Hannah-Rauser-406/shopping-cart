import React, { Component } from 'react';
import Faker from 'faker';
import {HomeContainer , AboutContainer, ShopContainer} from './container';
import {NavBar} from './components';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/my-about-page" component={AboutContainer} />
            <Route path="/my-shop-page" component={ShopContainer} />
            <NavBar />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
