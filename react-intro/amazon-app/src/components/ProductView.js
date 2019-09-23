import React from 'react';

export default function ProductView(props) {

    const productData = props.getProductInfo(parseInt(props.match.params.id));

    return ( 
        <div>
              <img src={ `/${productData.image}`}/>
            <div>
              { productData.name }
            </div>
            <div>
              { productData.manifacturer }
            </div>
            <div>
              { productData.value }
            </div>
            <li>
            <div>
              { productData.promos }
            </div>
      
            </li>   
        </div>
    )
}
