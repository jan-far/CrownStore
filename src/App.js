import { useEffect } from 'react';
import './App.css';
import HomePage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ShopPage from './pages/Shop';
import Header from './Components/Header';
import SignInAndSignUpPage from './pages/SignIn and SignUp';
import { connect } from 'react-redux';
import CheckOutPage from './pages/Checkout';
import { checkUserSession } from './Redux/user/user.action';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route path="/shop" component={ShopPage} />
        </Switch>
        <Switch>
          <Route exact path="/checkout" component={CheckOutPage} />
        </Switch>
        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
