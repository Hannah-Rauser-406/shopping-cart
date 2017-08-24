import React, { Component } from 'react';
import {HomeContainer , AboutContainer, DataProvider, SubmitProductContainer} from './container';
import NavBar from './components/navBar/NavBar';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';
import {Switch, Route} from 'react-router-dom';
import './App.css';

class Layout extends Component {

  render() {
    console.log(this.props.user)
    return (
      <div className='App'>
        <NavBar cartCount={this.props.cart.length} totalPrice={this.props.totalPrice}/>
          <div>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/my-about-page" component={AboutContainer} />
              <Route path="/shop" render={() =>
                 <Shop items={this.props.items} addToCart={this.props.addToCart}/> }
              />
              <Route path='/cart' render={() =>
                 <Cart cart={this.props.cart} totalPrice={this.props.totalPrice}/> }
              />
              <Route path='/profile' render={() =>
                 <Profile user={this.props.user} /> }
              />
              <Route path="/submitProduct" render={() =>
                 <SubmitProductContainer onChange={this.props.onChange} /> }
              />
            </Switch>
          </div>
      </div>
    );
  }
}

export default Layout;
