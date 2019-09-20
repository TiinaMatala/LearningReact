import React from 'react';
import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchView from './components/SearchView.js';

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
        { id: 1, name: 'Roku Express',          manifacturer: 'Roku',    value: '26$',     image: "Product1.PNG" },
        { id: 2, name: 'HP63',                  manifacturer: 'HP',      value: '45.89$s', image: "Product2.PNG" },
        { id: 3, name: 'Samsung memory card',   manifacturer: 'Samsung', value: '18.99$',  image: "Product3.PNG" },
        { id: 4, name: 'HP Office Jet Printer', manifacturer: 'HP',      value: '99.89$',  image: "Product4.PNG" },
        { id: 5, name: 'Western Digital Hard Drive', manifacturer: 'Western Digital', value: '59.99$', image: "Product5.PNG"},
        { id: 6, name: 'Roku Streaming Stick',  manifacturer: 'Roku',    value: '59.96$',  image: "Product6.PNG"},
        { id: 7, name: 'Acer Monitor',          manifacturer: 'Acer',    value: '89.99$',  image: "Product7.PNG"},
        { id: 8, name: 'TP Link Router',        manifacturer: 'TP Link', value: '57.99$',  image: "Product8.PNG"}
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
    </Router> 
    )
  }
}

export default App;
