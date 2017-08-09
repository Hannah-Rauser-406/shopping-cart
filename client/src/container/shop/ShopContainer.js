import React from 'react';
import Layout from '../../Layout';
import Faker from 'faker';

class ShopContainer extends React.Component {
  state = {
    title: undefined,
    items: [],
    cart: [],
  }
  componentDidMount(){
    this.getTitle();
    this.createData();
  }
  getTitle = () => {
    setTimeout(() => {
      this.setState ({ title: "this is ShopContainer's title"});
    }, 3000)
  }
  createData = () => {
    const tempArray = []
    for(let i=0; i<25; i += 1 ){
      tempArray.push({
        id: i,
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        img: Faker.random.image()
      })
    }
    this.setState({items: tempArray })
  }
    addToCart = (item) => {
    const tempCart = this.state.cart;
    tempCart.push(item);
    this.setState({ cart: tempCart })
    alert(`${ item.name } was added to your cart`)
    console.log(tempCart)
  }

  render(){
    return(
      <div className='main-div'>
          <div className='title-div'>
            {
              this.state.items.length > 0
              ?
              <Layout
                items={this.state.items}
                title={ this.state.title }
                addToCart={this.addToCart}
                cart={this.state.cart}/>
              :
              <h1> Loading... </h1>
            }
          </div>
      </div>
    )
  }
}


export default ShopContainer;
