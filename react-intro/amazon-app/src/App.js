import React from 'react';
import Product from './components/Product.js';
//import ProductItem from './components/ProductItem.js';
//import ProductPhotos from './components/ProductPhotos.js';
import './App.css';
import ProductPhotos from './components/ProductPhotos.js';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, name: 'Roku Express', manifacturer: 'Roku', value: '26$', image: "Product1.PNG" },
        { id: 2, name: 'HP63', manifacturer: 'HP', value: '45.89$s', image: "Product2.PNG" },
        { id: 3, name: 'Samsung memory card', manifacturer: 'Samsung', value: '18.99$', image: "Product3.PNG" },
        { id: 4, name: 'HP Office Jet Printer', manifacturer: 'HP', value: '99.89$', image: "Product4.PNG" }
      ],
      inputValue: "",
      layoutModeGrid: false
    };

  }

  textInputChange = (event) => {
    this.setState( { inputValue: event.target.value });
  }  

  toggleView = () => {
    this.setState({layoutModeGrid: ! this.state.layoutModeGrid})
}
  render()
  {

    return (
    <div className='App'>
      <div>
        <input type= "text" value={ this.state.inputValue } onChange= { this.textInputChange }></input>
      </div>
      <div>
          <button onClick = {this.toggleView} >Toggle view</button>
      </div>
      <div className='Product'>
            < Product items={ this.state.items.filter( (item) => {
            return item.name.includes(this.state.inputValue)
            })
            }
            layoutModeGrid={this.state.layoutModeGrid}/>
      </div>    
    </div>
    );
  } 


}

export default App;
