import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from './components/Game';
import Settings from './components/Settings';
import useFullscreen from './hooks/useFullscreen';
import Statistics from './components/Statistics';
import { TDispatch, TState } from './redux/types';
import { setMusic, setSound } from './redux/chessActions';
import useHotkeys from './hooks/useHotkeys';
import HotKeys from './components/HotKeys';

type Props = {
  music: number;
  sound: number;
  setMusic: (value: number) => void;
  setSound: (value: number) => void;
};

const App: React.FC<Props> = (props: Props) => {
  const { music, sound } = props;

  useHotkeys('ArrowUp', () => props.setMusic(Math.min(music + 0.1, 1)));
  useHotkeys('ArrowDown', () => props.setMusic(Math.max(music - 0.1, 0)));
  useHotkeys('ArrowRight', () => props.setSound(Math.min(sound + 0.1, 1)));
  useHotkeys('ArrowLeft', () => props.setSound(Math.max(sound - 0.1, 0)));

  const AppRef = useRef<HTMLDivElement>(null);
  const fullscreen = useFullscreen(AppRef);

  return (
    <div className="App" ref={AppRef}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/settings">
          <Settings fullscreen={fullscreen} />
        </Route>
        <Route path="/hotkeys" component={HotKeys} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    music: state.music,
    sound: state.sound,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    setMusic: (value: number) => dispatch(setMusic(value)),
    setSound: (value: number) => dispatch(setSound(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
