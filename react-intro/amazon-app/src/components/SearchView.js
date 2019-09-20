import React from 'react';
import Product from './Product';
import { Link } from "react-router-dom";

export default function SearchView(props) {
    return (
        <div className='App'>
        <div>
          <input type= "text" value={ props.inputValue } onChange= { props.textInputChange }></input>
        </div>
        <div>
            <Link to="/register"><button className='Register'>Register</button></Link>
        </div>
        <div>
            <button onClick = { props.toggleView } >Toggle view</button>
        </div>
        <div className="Client">
        { props.inputForm.name } <br/>
        { props.inputForm.address } <br/>
        { props.inputForm.email } <br/>
        { props.inputForm.phone }
        </div>  
        <div className='Product'>
              < Product items={ props.items.filter( (item) => {
              return item.name.includes(props.inputValue)
              })
              }
              layoutModeGrid={ props.layoutModeGrid }/>
        </div> 
         
      </div>
    )
}
