import './App.css';
import HomePage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path='/shop/hats' component={}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
