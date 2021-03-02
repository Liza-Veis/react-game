import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from './components/Game';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/statistics">{/* Statistics */}</Route>
          <Route path="/settings">{/* Settings */}</Route>
          <Route path="*">{/* Error */}</Route>
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
