import React from 'react';
import ShopTile from './ShopTile';

const Shop = (props) => {
  return(
    <div>
      <h1>{ props.title }</h1>
      <div>
      {

        props.items.map((item, index) =>
        
          <ShopTile key={index} item={item} addToCart={props.addToCart} />

        )

      }
      </div>
    </div>
  )
}

export default Shop;
