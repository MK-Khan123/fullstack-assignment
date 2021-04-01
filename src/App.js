import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Login></Login>
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Login path = '/login'/>
    //   </Switch>
    // </Router>
  );
}

export default App;
