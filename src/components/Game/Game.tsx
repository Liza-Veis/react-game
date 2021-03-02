import React from 'react';
import { useHistory } from 'react-router-dom';
import Board from './components/Board';

const Game = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="game">
      <Board />
      <button className="btn game__btn" onClick={handleClick} type="button">
        Surrender
      </button>
    </div>
  );
};

export default Game;
