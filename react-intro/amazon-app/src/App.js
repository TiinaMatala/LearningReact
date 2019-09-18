import React from 'react';
import Product from './components/Product.js';
import './App.css';
import Register from './components/Register';

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

  registrate = () => {
    this.setState({ registerForm: true})
  }

  registerCancel = () => {
    this.setState({ registerForm: false})
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
      registerForm: false
    })
  }

  render()
  {
    if (this.state.registerForm == true) {
      return (
        <div>
          <Register onCancel = { this.registerCancel } onSubmit={ this.handleSubmit } />
        </div>
      )

    }
    else {
      return (
        <div className='App'>
          <div>
            <input type= "text" value={ this.state.inputValue } onChange= { this.textInputChange }></input>
          </div>
          <div>
              <button onClick = { this.registrate } className="Register">Register</button>
          </div>
          <div>
              <button onClick = {this.toggleView} >Toggle view</button>
          </div>
          <div className="Client">
          { this.state.inputForm.name } <br/>
          { this.state.inputForm.address } <br/>
          { this.state.inputForm.email } <br/>
          { this.state.inputForm.phone }
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


}

export default App;
