import React from 'react';
import Faker from 'faker';

const ShopAll = (props) => {
  state = {
    items: [],
    productName: '',
    product: '',
    price: '',
    dept: '',
  }
  componentDidMount = () => this.setState({items: faker.fake.commerce})




  render() {
    return(
      <div>
       {
         props.items.map({ productName: props.commerce.productName , product: props.commerce.product , price: props.commerce.price , dept: props.commerce.department })
       }
      </div>

      )
    }
  }



//   const ShopAll = (props) => {
//
//   return(
//     <div className="shopping-container flex-container">
//     {
//       props.items.map((item,index) =>
//         <div key={index} className="shop-item flex-item">
//         <h3>{item.productName}</h3>
//         <p>{item.product}</p>
//         <p>Price: ${item.price}</p>
//         </div>
//       )
//     }
//     </div>
//   )
// }

export default ShopAll;

//commerce
//    color
//    department
//    productName
//    price
//    productAdjective
//    productMaterial
//    product
