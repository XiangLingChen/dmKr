import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Toolbar from './components/nonRwdNav/nonRwdNav.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignUpPageOnly from './pages/sign-up-only/sign-up-only.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopAllPage from './pages/shop-all/shop-all.component';
import DirectoryPage from './pages/directoryPage/directoryPage.component';
import SkincarePage from './pages/skincare/skincare-page.component';
import CleansingPage from './pages/cleansing/cleansing-page.component';
import BodycarePage from './pages/bodycare/bodycare-page.component';
import HairPage from './pages/hair/hair-page.component';
import BeautyEffectPage from './pages/collections-page/SKINCARE/BeautyEffect.component';
import AquaPage from './pages/collections-page/SKINCARE/Aqua.component';
import Q10Page from './pages/collections-page/SKINCARE/Q10.component';
import AloeVeraPage from './pages/collections-page/SKINCARE/AloeVera.component';
import AlmondPage from './pages/collections-page/SKINCARE/Almond.component';
import LipPage from './pages/collections-page/SKINCARE/Lip.component';
import MakeupRemoverPage from './pages/collections-page/CLEANSING/MakeupRemover.component';
import CleansingCollectionPage from './pages/collections-page/CLEANSING/CleansingCollection.component';
import BodyFitPage from './pages/collections-page/BODYCARE/BodyFit.component';
import BodyMilkPage from './pages/collections-page/BODYCARE/BodyMilk.component';
import ShampooPage from './pages/collections-page/HAIR/Shampoo.component';
import ConditionerPage from './pages/collections-page/HAIR/Conditioner.component';

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
          <Route exact path="/shopall" component={ShopAllPage} />
          <Route exact path="/directory" component={DirectoryPage} />
         
          <Route exact path="/skincare" component={SkincarePage} />
          <Route exact path="/cleansing" component={CleansingPage} />
          <Route exact path="/bodycare" component={BodycarePage} />
          <Route exact path="/hair" component={HairPage} />
          <Route exact path="/beautyeffect" component={BeautyEffectPage} />
          <Route exact path="/aqua" component={AquaPage} />
          <Route exact path="/q10" component={Q10Page} />
          <Route exact path="/aloevera" component={AloeVeraPage} />
          <Route exact path="/almond" component={AlmondPage} />
          <Route exact path="/lip" component={LipPage} />
          <Route exact path="/makeupremover" component={MakeupRemoverPage} />
          <Route exact path="/cleansingCollection" component={CleansingCollectionPage} />
          <Route exact path="/bodyfit" component={BodyFitPage} />
          <Route exact path="/bodymilk" component={BodyMilkPage} />
          <Route exact path="/shampoo" component={ShampooPage} />
          <Route exact path="/conditioner" component={ConditionerPage} />
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
