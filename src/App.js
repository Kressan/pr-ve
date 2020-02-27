import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/nav';
import Scrolltop from './components/scrolltop';
import Footer from './components/footer';
import Home from './views/home';

function App() {
  return (
    <div className="App">
    <Router>
    < Nav />
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
    < Scrolltop />
    < Footer />
    </Router>
    </div>
  );
}

export default App;
