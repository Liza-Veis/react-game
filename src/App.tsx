import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import Game from './components/Game';
import Settings from './components/Settings';
import useFullscreen from './hooks/useFullscreen';

const App: React.FC = () => {
  const AppRef = useRef<HTMLDivElement>(null);
  const fullscreen = useFullscreen(AppRef);

  return (
    <div className="App" ref={AppRef}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/settings">
          <Settings fullscreen={fullscreen} />
        </Route>
        <Route path="/statistics">{/* Statistics */}</Route>
        <Route path="*">{/* Error */}</Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
