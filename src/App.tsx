import React from 'react';
import { BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import SignUpForm from './components/Signup'
import SignInForm from './components/SignIn';
import EmailInput from './components/EmailInput';
import NewPassword  from './components/NewPassword';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'  exact>
            <SignInForm />
          </Route>
          <Route path='/homepage'>
            <Homepage />
          </Route>
          <Route path='/Signup'>
            <SignUpForm />
          </Route>
          <Route path='/email'>
            <EmailInput />
          </Route>
          <Route path='/password/:token'>
            <NewPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

