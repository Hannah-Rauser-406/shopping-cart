import React from 'react';

const formStyle = {
  marginTop: "10em"
}
const SubmitProduct = (props) => {
  return(
    <div style={formStyle}>
      <form>
        <label>Product Name</label>
          <input type='text' onChange={(event) => props.onChange('name', event.target.value)} />
        <label>Product Price</label>
          <input type='number' onChange={(event) => props.onChange('price', event.target.value)} />
        <label>Product Image</label>
          <input type='text' onChange={(event) => props.onChange('image', event.target.value)} />
        </form>
    </div>
  )
}

export default SubmitProduct
