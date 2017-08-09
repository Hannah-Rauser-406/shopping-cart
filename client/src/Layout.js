import React, { Component } from 'react';
import {HomeContainer , AboutContainer, ShopContainer} from './container';
import NavBar from './components/navBar/NavBar';
import Shop from './components/shop/Shop';
import {Switch, Route} from 'react-router-dom';
import './App.css';

class Layout extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar cartCount={this.props.cart.length}/>
          <div>
            <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/my-about-page" component={AboutContainer} />
            <Route path="/my-shop-page" component={ShopContainer} />
            <Route path="/shop" render={() => <Shop items={this.props.items} addToCart={this.props.addToCart}/>} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default Layout;
