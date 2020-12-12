import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from './Home';
import {Results} from './Results';
import { Title } from './Title';

export const App = () => (
    <Router>
        <Title>Git Job</Title>
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </Router>
)