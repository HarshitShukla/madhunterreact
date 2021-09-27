import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import BirdPage from './Components/bird/BirdPage';
import DogPage from './Components/dog/DogPage';
import FishPage from './Components/fish/FishPage';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/fish">Fish</Link>
              </li>
              <li>
                <Link to="/dog">Dog</Link>
              </li>
              <li>
                <Link to="/bird">Bird</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/bird">
            <BirdPage />
          </Route>
          <Route path="/dog">
            <DogPage />
          </Route>
          <Route path="/fish">
            <FishPage />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>

        <footer className="App-footer"></footer>
      </div>
    </Router>
  );
}

export default App;
