import React from "react";
import { Link } from 'react-router-dom';

const ProductItem = props => {
    let style = {float: "left"}
    if (props.layoutModeGrid === false) {
      style = {float: "none"};
    }
    return ( 
    <li style={style}>
      
        <div>
          { props.name }
        </div>
        <div>
          { props.manifacturer }
        </div>
      <div>
        { props.value }
      </div>
      <div>
      <Link to={ `/productView/${props.id}`}><img src={ props.image }></img></Link>
      </div>
    </li>
    )
  }
  
  export default ProductItem;