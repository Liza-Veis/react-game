import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TState } from '../../redux/types';
import Board from './components/Board';
import { stopSearching } from '../../AI/sendMessage';

type Props = {
  isGameOver: boolean;
};

const Game: React.FC<Props> = ({ isGameOver }: Props) => {
  return (
    <div className="game">
      <Board />
      {!isGameOver && (
        <NavLink className="btn game__btn" to="/" onClick={stopSearching}>
          Surrender
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    isGameOver: state.isGameOver,
  };
};

export default connect(mapStateToProps)(Game);
