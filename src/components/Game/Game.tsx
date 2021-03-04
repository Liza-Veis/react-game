import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TDispatch, TState } from '../../redux/types';
import Board from './components/Board';
import { stopSearching } from '../../AI/sendMessage';
import { surrender } from '../../redux/chessActions';

type Props = {
  isGameOver: boolean;
  surrender: () => void;
};

const Game: React.FC<Props> = ({
  isGameOver,
  surrender: surrenderFn,
}: Props) => {
  const handleClick = () => {
    surrenderFn();
    stopSearching();
  };
  return (
    <div className="game">
      <Board />
      {!isGameOver && (
        <NavLink className="btn game__btn" to="/" onClick={handleClick}>
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

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    surrender: () => dispatch(surrender()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
