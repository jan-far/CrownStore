import './App.css';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/Shop';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
