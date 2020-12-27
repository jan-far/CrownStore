import './App.css';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/Shop';
import Header from './Components/Header';
import SignInAndSignUpPage from './pages/SignIn and SignUp';
import { auth } from './Components/firebase/firebase.utils';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user)
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <Router>
          <Header currentUser={this.state.currentUser}/>
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

export default App;
