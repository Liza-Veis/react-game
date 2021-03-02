import React from 'react';
import { connect } from 'react-redux';
import { TDispatch, TState } from '../../redux/types';
import Square from './components/Square';
import Piece, { PieceType } from './components/Piece';
import { movePiece, selectSquare } from '../../redux/chessActions';
import { isDarkSquare } from '../../utils';

type Props = {
  board: (PieceType | null)[];
  selectedSquare: number | null;
  select: (idx: number) => void;
  moveTo: (idx: number) => void;
};

const Board: React.FC<Props> = (props: Props) => {
  const { board, selectedSquare, select, moveTo } = props;

  return (
    <div className="board">
      {board.map((piece, idx) => (
        <Square
          key={idx}
          isDark={isDarkSquare(idx)}
          moveTo={() => (selectedSquare ? moveTo(idx) : select(idx))}
        >
          {piece && <Piece piece={piece} isSelected={selectedSquare === idx} />}
        </Square>
      ))}
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    board: state.board,
    selectedSquare: state.selectedSquare,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    select: (idx: number) => dispatch(selectSquare(idx)),
    moveTo: (idx: number) => dispatch(movePiece(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
