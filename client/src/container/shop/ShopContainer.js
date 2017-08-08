import React from 'react';
import Shop from '../../components/shop/Shop';
import ShopAll from '../../components/shop/ShopAll';

class ShopContainer extends React.Component {
  state = {
    title: undefined
  }
  componentDidMount(){
    this.getTitle();
  }
  getTitle = () => {
    setTimeout(() => {
      this.setState ({ title: "this is ShopContainer's title"});
    }, 3000)
  }
  render(){
    return(
      <div className='main-div'>
          <div className='title-div'>
            {
              this.state.title
              ?
              <Shop title={ this.state.title } />
              :
              <h1> No State Yet </h1>
            }
          </div>
      </div>
    )
  }
}


export default ShopContainer;
