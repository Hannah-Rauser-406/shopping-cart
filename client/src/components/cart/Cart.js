import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  console.log('from cart', props)
    return(
      <div>
        <div>
          <h2>Cart Total: ${props.totalPrice}</h2>
        </div>
      {
        props.cart.length === 0
        ? <h1> Shopping Cart is empty </h1>
        : props.cart.map((item, index) =>
            <CartItem key={index} item={item} />
        )
      }
      </div>
  )
}

export default Cart;
