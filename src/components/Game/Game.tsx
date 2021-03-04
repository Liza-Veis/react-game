import React from 'react';
import { connect } from 'react-redux';
import { TDispatch, TState } from '../../redux/types';
import Board from './components/Board';
import { stopSearching } from '../../AI/sendMessage';
import { surrender } from '../../redux/chessActions';

type Props = {
  isGameOver: boolean;
  surrender: () => void;
};

const Game: React.FC<Props> = (props: Props) => {
  const { isGameOver } = props;
  const handleClick = () => {
    props.surrender();
    stopSearching();
  };
  return (
    <div className="game">
      <Board />
      {!isGameOver && (
        <button className="btn game__btn" onClick={handleClick} type="button">
          Surrender
        </button>
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
