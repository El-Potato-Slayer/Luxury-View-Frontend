import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div data-testid="app" className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <div data-testid="app-homepage">
              Homepage
            </div> */}
          </Route>
          <Route path="/mansions">
            <div data-testid="app-mansions">
              <h2>Mansions</h2>
            </div>
          </Route>
          <Route path="/appointments">
            <div data-testid="app-appointments">
              <h2>Appointments</h2>
            </div>
          </Route>
          <Route path="/agents">
            <div data-testid="app-agents">
              <h2>Agents</h2>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
