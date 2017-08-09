import React from 'react';


/*const styles = {
  container {
  display:'flex',
  border: 'solid 1px black',
  backgroundColor: 'teal',
  }
}*/


const ShopTile = (props ) => {
  const item = props.item
  /*console.log(item)*/
  return(
    <div
    /*className={styles.container}*/
    >
      <h3>{ item.name }</h3>
      <h3>{ item.price }</h3>
      <h5>{ item.id }</h5>
      <img src={ item.img } />
      <button className='btn-add-to-cart' onClick={() => props.addToCart(props.item)}>Add to Cart</button>
    </div>
  )
}

export default ShopTile;
