import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  active: {
    backgroundColor: 'teal'
  },
  inactive: {
    backgroundColor: 'green'
  }
}

const NavBar = (props) => {
  const isActive = false
    return(
      <div>
        <nav style={
          isActive
          ?
          styles.active
          :
          styles.inactive
        }>
          <Link to="/">Home</Link>
          <Link to="/profile"> Profile {props.user}</Link>
          <Link to="/my-about-page">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart: # {props.cartCount} $ {props.totalPrice}</Link>
          <Link to="/submitProduct">Submit</Link>
        </nav>
      </div>
    )
}

export default NavBar;
