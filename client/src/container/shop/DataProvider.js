import React from 'react';
import Layout from '../../Layout';
import Faker from 'faker';

class DataProvider extends React.Component {
  state = {
    title: undefined,
    items: [],
    cart: [],
    user: null,
    isDataLoaded: false,
    product: {},
  }
  componentDidMount(){
    this.getTitle();
    this.createData();
  }
  getTitle = () => {
    setTimeout(() => {
      this.setState ({ title: "this is DataProvider's title"});
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
    this.setState({
      items: tempArray ,
      user: this.createUser(),
      isDataLoaded: true,
    })
  }
  addToCart = (item) => {
    const tempCart = this.state.cart;
    tempCart.push(item);
    this.setState({ cart: tempCart })
    alert(`${ item.name } was added to your cart`)
    console.log(tempCart)
  }
  createUser = () => {
    const user = {
      fName: Faker.name.firstName(),
      lName: Faker.name.lastName(),
      email: Faker.internet.email(),
      avatar: Faker.internet.avatar(),
    }
    return user
  }
  onChange = (type, value) => {
    const newProduct = this.state.product
    newProduct[type] = value
    this.setState({ product: newProduct })
    console.log(this.state.product)
  }
  render(){
    let totalPrice = 0;
    for(let i=0; i<this.state.cart.length; i+=1){
      totalPrice += parseFloat(this.state.cart[i].price);
    }
    /*
    easier way for me...
    let totalPrice = 0;
    this.state.cart.forEach((element) => totalPrice +=parseFloat(element.price))

/or/
    const totalPrice = this.state.cart.reduce( (total,e) => total + e.price, 0)

    */
    return(
      <div className='main-div'>
          <div>
            {
              this.state.isDataLoaded
              ?
              <Layout
                items={this.state.items}
                title={ this.state.title }
                addToCart={this.addToCart}
                cart={this.state.cart}
                totalPrice={totalPrice.toFixed(2)}
                user={this.state.user}
                onChange={this.onChange}
              />
              :
              <h1> Loading... </h1>
            }
          </div>
      </div>
    )
  }
}


export default DataProvider;
