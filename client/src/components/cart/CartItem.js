import React from 'react';

const styles = {
  container:{
    backgroundColor: 'teal',
  },
  header: {
    fontSize: '30px',
  }
}

const CartItem = (props) => {
  const item = props.item
  return(

    <div style={styles.container} >
      <h1 style={styles.header}>{item.name}</h1>
      <img src={item.img} />
      <h3>Price: {item.price} </h3>
    </div>
  )
}

export default CartItem;
