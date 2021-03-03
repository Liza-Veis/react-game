import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from './components/Game';
import Settings from './components/Settings';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/statistics">{/* Statistics */}</Route>
        <Route path="*">{/* Error */}</Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
