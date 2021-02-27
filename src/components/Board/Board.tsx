import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/chessReducer.types';
import Square from './components/Square';
import Piece, { PieceType } from './components/Piece';

type Props = {
  board: (PieceType | null)[][];
};

const Board: React.FC<Props> = ({ board }: Props) => {
  const isDarkSquare = (idx: number) => {
    const row = idx % 8;
    const column = Math.abs(Math.floor(idx / 8) - 7);
    return (row + column) % 2 === 1;
  };

  return (
    <div className="board">
      {board.flat().map((piece, idx) => (
        <Square key={idx} isDark={isDarkSquare(idx)}>
          {piece && <Piece piece={piece} />}
        </Square>
      ))}
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    board: state.board,
  };
};

export default connect(mapStateToProps)(Board);
