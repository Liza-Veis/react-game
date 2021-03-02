import React from 'react';
import Board from './components/Board';
import Header from './components/Header';

const Game = () => {
  return (
    <div className="game">
      <Header />
      <Board />
    </div>
  );
};

export default Game;
