import React from "react";
import ProductPhotos from './ProductPhotos';
const ProductItem = props => {
    return <li className="item flex">
      <div className="flex itemQtyUnit">
        <div>
          { props.name }
        </div>
        <div>
          { props.manifacturer }
        </div>
      </div>
      <div>
        { props.value }
      </div>
      <div>
        <ProductPhotos/>
      </div>
    </li>
  }
  
  export default ProductItem;