import React from "react";

class App extends React.Component {
    constructor(props)
    {
      /* You should call super(props) before any other statement. 
         Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
      */
      super(props);

      this.state = {
        items: [
          { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
          { id: 1, value: 'Bananas', qty: 6, unit: 'pcs' },
          { id: 1, value: 'Bread', qty: 3, unit: 'x' },
          { id: 1, value: 'Eggs', qty: 16, unit: 'x' }
        ]
      };

    }

    render()
    {
      const { applicationDescription, applicationName } = this.props;
      return <div className='shoppingList'>
        <Title 
          applicationDescription={ applicationDescription }
          applicationName={ applicationName }
        />
        <ShoppingList items={ this.state.items } />
      </div>
    }
  }

export default App;