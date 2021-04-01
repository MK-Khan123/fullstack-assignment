import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/deals'>
          <Deals />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
