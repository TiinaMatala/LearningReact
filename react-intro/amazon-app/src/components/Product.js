import React from 'react';
import ProductItem from './ProductItem.js';

const Product = props => {
    return <ul className="Product">
      {
        props.items.map(i => <ProductItem {...i} key={ i.id }/>)
      }
    </ul>
  }

  export default Product;