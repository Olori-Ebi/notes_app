import React from 'react';
import { BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
<Router>
<Switch>
  <Route path='/' exact>
     <Homepage />
  </Route>
  </Switch>
</Router>
    </div>
  );
}

export default App;

