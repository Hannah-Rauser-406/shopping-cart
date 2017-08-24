import React, {Component} from 'react'
import {SubmitProduct} from '../../components'
const formStyle = {
  marginTop: '10em'
}
class SubmitProductContainer extends Component {
  render () {
    return (
      <div style={formStyle}>
        <SubmitProduct onChange={this.props.onChange}/>
        <h1>Hello from Submit Product</h1>
      </div>
    )
  }
}

export default SubmitProductContainer
