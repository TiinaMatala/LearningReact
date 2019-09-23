import React from 'react';
import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchView from './components/SearchView.js';
import ProductView from './components/ProductView';
import ProductItem from './components/ProductItem';

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
        { id: 1, name: 'Roku Express',          manifacturer: 'Roku',    value: '26$',     image: "Product1.PNG",
          promos: "Simple setup with an included high speed HDMI Cable" },
        { id: 2, name: 'HP63',                  manifacturer: 'HP',      value: '45.89$', image: "Product2.PNG",
          promos: "Up to 2x more prints with Original HP ink vs refill cartridges" },
        { id: 3, name: 'Samsung memory card',   manifacturer: 'Samsung', value: '18.99$',  image: "Product3.PNG",
          promos: "Water proof, Shock proof, Temperature proof, X ray proof, Magnetic proof" },
        { id: 4, name: 'HP Office Jet Printer', manifacturer: 'HP',      value: '99.89$',  image: "Product4.PNG",
          promos: "INK, SHIPPING and RECYCLING are all included in a monthly HP Instant Ink plan" },
        { id: 5, name: 'Western Digital Hard Drive', manifacturer: 'Western Digital', value: '59.99$', image: "Product5.PNG",
          promos: "Improve PC performance" },
        { id: 6, name: 'Roku Streaming Stick',  manifacturer: 'Roku',    value: '59.96$',  image: "Product6.PNG",
          promos: "Powerful, portable, exceptional wireless" },
        { id: 7, name: 'Acer Monitor',          manifacturer: 'Acer',    value: '89.99$',  image: "Product7.PNG",
          promos: "Radeon free Sync technology" },
        { id: 8, name: 'TP Link Router',        manifacturer: 'TP Link', value: '57.99$',  image: "Product8.PNG",
          promos: "Simultaneous dual band WiFi: browse the web on one band while streaming media on the other" }
      ],
      inputValue: "",
      layoutModeGrid: true,
      registerForm: false,
      inputForm: { name:"" , address:"" , email:"" , phone:"" }
    };

  }

  textInputChange = (event) => {
    this.setState( { inputValue: event.target.value });
  }  

  toggleView = () => {
    this.setState({layoutModeGrid: ! this.state.layoutModeGrid})
}

 getProductInfo = (productId) => {
   return this.state.items.find(item => item.id === productId);
 }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputForm:
      {
        name: event.target.name.value,
        address: event.target.address.value,
        email: event.target.email.value,
        phone: event.target.phone.value
      },
    })
  }

  render()
  {
    return (
    <Router>
      <Route path="/" exact render={
        (routeProps) =>
        <SearchView 
        items={ this.state.items } 
        inputValue={ this.state.inputValue } 
        layoutModeGrid={ this.state.layoutModeGrid } 
        inputForm={ this.state.inputForm }
        toggleView={ this.toggleView } 
        registrate= { this.registrate }
        textInputChange= { this.textInputChange } 
        />
       } >
      </Route>

      <Route path="/register" exact render={ 
        (routeProps) => 
        <Register 
        onCancel = { this.registerCancel } 
        onSubmit={ this.handleSubmit }
        {...routeProps}
        /> 
      }>
      </Route>

      <Route path="/productView/:id" exact render={
        (routeProps) =>
        <ProductView
        items={ this.state.items } 
        {...routeProps} getProductInfo={this.getProductInfo}
        />
      }>
      </Route>


    </Router> 
    )
  }
}

export default App;
