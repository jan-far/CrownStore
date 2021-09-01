import { useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { checkUserSession } from './Redux/user/user.action';
import { GlobalStyle } from './global.Style';
import { connect } from 'react-redux';

import ErrorBoundary from './Components/Error-boundary';
import Spinner from './Components/Spinner';
import Header from './Components/Header';

const HomePage = lazy(() => import('./pages/Homepage'));
const ShopPage = lazy(() => import('./pages/Shop'));
const SignInAndSignUpPage = lazy(() => import('./pages/SignIn and SignUp'));
const CheckOutPage = lazy(() => import('./pages/Checkout'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckOutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
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
