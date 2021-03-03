import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startGame } from '../../redux/chessActions';
import { TDispatch } from '../../redux/types';

type Props = {
  startNewGame: () => void;
};

const Home: React.FC<Props> = ({ startNewGame }: Props) => {
  return (
    <div className="main">
      <NavLink className="btn" onClick={startNewGame} to="/game">
        New Game
      </NavLink>
      <NavLink className="btn" to="/settings">
        Settings
      </NavLink>
      <NavLink className="btn" to="/statistics">
        Statistics
      </NavLink>
      <NavLink className="btn" to="/">
        Hot keys
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    startNewGame: () => dispatch(startGame()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
