import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import {
  CheckoutPage,
  HomePage, 
  ShopPage, 
  SignInAndSignUpPage
} from './pages';
import {Header} from './components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }    
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return(
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>

    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);