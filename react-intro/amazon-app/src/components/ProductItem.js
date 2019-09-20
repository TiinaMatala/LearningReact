import React from "react";
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
      <img src={ props.image }/>
      </div>
    </li>
    )
  }
  
  export default ProductItem;