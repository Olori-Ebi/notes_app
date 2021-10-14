import React from 'react';
import './App.css';
import SignUpForm from './components/Signup'
import SignInForm from './components/SignIn';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Signup'>
            <SignUpForm />
          </Route>
          <Route path='/login'>
            <SignInForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;

