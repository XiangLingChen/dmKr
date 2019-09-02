import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Toolbar from './components/nonRwdNav/nonRwdNav.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignUpPageOnly from './pages/sign-up-only/sign-up-only.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
         setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        });
      } else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route 
            exact 
            path="/signin" 
            render = {()=>this.props.currentUser? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )}
             />
          <Route path="/signup" component={SignUpPageOnly} />
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
