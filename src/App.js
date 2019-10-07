import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Toolbar from './components/nonRwdNav/nonRwdNav.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignUpPageOnly from './pages/sign-up-only/sign-up-only.component';
import CheckoutPage from './pages/checkout/checkout.component';
import DirectoryPage from './pages/directoryPage/directoryPage.component';
import SkincarePage from './pages/skincare/skincare-page.component';
import CleansingPage from './pages/cleansing/cleansing-page.component';
import BodycarePage from './pages/bodycare/bodycare-page.component';
import HairPage from './pages/hair/hair-page.component';
import Q10Page from './pages/collections-page/SKINCARE/Q10.component';

import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
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
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/directory" component={DirectoryPage} />
         
          <Route exact path="/skincare" component={SkincarePage} />
          <Route exact path="/cleansing" component={CleansingPage} />
          <Route exact path="/bodycare" component={BodycarePage} />
          <Route exact path="/hair" component={HairPage} />
          <Route exact path="/q10" component={Q10Page} />
          <Route exact path="/q10" component={Q10Page} />
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
