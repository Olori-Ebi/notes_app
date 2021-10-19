import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import SignUpForm from './components/Signup'
import SignInForm from './components/SignIn';
import EmailInput from './components/EmailInput';
import NewPassword  from './components/NewPassword';
import Profile  from './components/Profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginRedirect from './components/RedirectLogin';
import ChangePasswordForm from './components/ChangePassword';
import Logout from './components/Logout';


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
          <Route path='/redirect/:token'>
            <LoginRedirect />
          </Route>
          <Route path='/email'>
            <EmailInput />
          </Route>
          <Route path='/password/:token'>
            <NewPassword />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/changepassword'>
            <ChangePasswordForm />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

