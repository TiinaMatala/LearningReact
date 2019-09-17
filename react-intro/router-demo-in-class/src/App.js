import React from 'react';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Common to all routes</h1>
    <Router>
      <Route path='/' exact component={ View1 } />
      <Route path='/example' exact component={ View2 } />
      <Route path='/example2' exact component={ View3 } />
      


    </Router>
    </div>
  );
}

export default App;
