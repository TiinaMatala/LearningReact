import React from "react";
import ReactDOM from "react-dom";
import App from "./components/ShoppingListApp";




ReactDOM.render(
    <App
      applicationName={ "Shopping List" }
      applicationDescription= { "The best shopping list, now with component title" }
    />,      
    document.getElementById('application')
  );