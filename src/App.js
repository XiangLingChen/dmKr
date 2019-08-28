import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Toolbar from './components/nonRwdNav/nonRwdNav.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignUpPageOnly from './pages/sign-up-only/sign-up-only.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {console.log(this.state)})
        });
      } else{
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Toolbar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/signup" component={SignUpPageOnly} />
        </Switch>
      </div>
    );
  }
}

export default App;
