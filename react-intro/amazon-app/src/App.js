import React from 'react';
import axios from 'axios';
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
        ],
      inputValue: "",
      layoutModeGrid: true,
      registerForm: false,
      inputForm: { name:"" , address:"" , email:"" , phone:"" }
    };

  }

  componentDidMount = () =>
  {
    axios.get('http://localhost:4000/items').then(result => {  
    this.setState({ items: result.data.items});
    })
    .catch(error => {
      console.error(error);
      this.setState({ networkError: true })
    })
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
