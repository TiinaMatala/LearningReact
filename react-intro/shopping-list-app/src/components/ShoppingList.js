import React from "react";

const ShoppingList = props => {
    return <ul>
      {
        props.items.map(i => <ShoppingListItem {...i} key={ i.id }/>)
      }
    </ul>
  }

  export default ShoppingList