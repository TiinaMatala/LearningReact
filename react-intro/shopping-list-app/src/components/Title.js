import React from "react";

const Title = props => {
    return <div>
      <h1 id='title'>{ props.applicationName }</h1>
      <div id='titleSub'>{ props.applicationDescription }</div>
    </div>
  } 
  
  export default Title;