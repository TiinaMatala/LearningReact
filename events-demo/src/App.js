import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      clickCounter: 0,
      inputValue: "Doh"
    };
    this.test = this.test.bind(this);
  }

  test() {
    console.log("hello");
    this.setState( { clickCounter: this.state.clickCounter + 1});
  }

  test2 = () => {
    this.setState( { clickCounter: this.state.clickCounter + 1});
  }

  test3() {
    this.setState( { clickCounter: this.state.clickCounter + 1});
  }

  textInputChange = (event) => {
    
    console.log(event.target.value)
    this.setState( {inputValue: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.test2}>
          test button
        </button>
        <Button isClicked={ this.test2 } color={ "blue" } />
        <div>
          You have pressed the button this many times: { this.state.clickCounter }
        </div>
        <div>
          <input type="text" 
                 value={this.state.inputValue }
                 onChange= { this.textInputChange}></input>
        </div>
        <div>
          Content of the input field: { this.state.inputValue }
        </div>
      </div>
    );
  }
}


/*function App() {

  function test()
  {
    console.log("Hello!");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} onClick={ test } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
