import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavigationBar from './components/navigationBar/navigationBar.component'
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );
}

export default App;
