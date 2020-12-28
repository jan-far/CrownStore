import './App.css';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/Shop';
import Header from './Components/Header';
import SignInAndSignUpPage from './pages/SignIn and SignUp';
import {
  auth,
  createUserProfileDocument,
} from './Components/firebase/firebase.utils';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/user.action';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Switch>
            <Route exact path="/shop" component={ShopPage} />
          </Switch>
          <Switch>
            <Route exact path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
