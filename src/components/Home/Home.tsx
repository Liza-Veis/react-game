import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startGame } from '../../redux/chessActions';
import { TDispatch } from '../../redux/types';

type Props = {
  startNewGame: () => void;
};

const Home: React.FC<Props> = ({ startNewGame }: Props) => {
  const history = useHistory();
  const handleClick = (route: string) => {
    history.push(route);
  };

  return (
    <div className="main">
      <button
        className="btn"
        onClick={() => {
          handleClick('/game');
          startNewGame();
        }}
        type="button"
      >
        New Game
      </button>
      <button
        className="btn"
        onClick={() => handleClick('/statistics')}
        type="button"
      >
        Statistics
      </button>
      <button
        className="btn"
        onClick={() => handleClick('/settigns')}
        type="button"
      >
        Settings
      </button>
      <button className="btn" onClick={() => handleClick('/')} type="button">
        Hot keys
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    startNewGame: () => dispatch(startGame()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
