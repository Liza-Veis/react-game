import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TDispatch, TState } from '../../../redux/types';
import Square from './Square';
import Piece, { PieceType } from './Piece';
import { movePiece, selectSquare } from '../../../redux/chessActions';
import { isDarkSquare } from '../../../utils';
import Promotion from './Promotion';
import GameOver from './GameOver';

type Props = {
  board: (PieceType | null)[];
  selectedSquare: number | null;
  promotion: { from: string; to: string; color: string } | null;
  turn: string;
  isGameOver: boolean;
  mode: string;
  side: string;
  select: (idx: number) => void;
  moveTo: (idx: number) => void;
};

const Board: React.FC<Props> = (props: Props) => {
  const {
    board,
    selectedSquare,
    promotion,
    turn,
    select,
    moveTo,
    isGameOver,
    mode,
    side,
  } = props;

  const [isShownGameOver, setIsShownGameOver] = useState(isGameOver);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShownGameOver(isGameOver);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [isGameOver]);

  const handleClick = (piece: PieceType | null, idx: number) => {
    if (selectedSquare === idx || (mode === 'with-AI' && turn !== side)) {
      return;
    }
    if (!piece) {
      moveTo(idx);
      return;
    }
    if (piece.color !== turn) {
      if (selectedSquare) {
        moveTo(idx);
      }
      return;
    }

    const targetPiece = board[idx];
    if (targetPiece && targetPiece.color === piece.color) {
      select(idx);
    } else if (selectedSquare) {
      moveTo(idx);
    }
  };

  return (
    <div className="board">
      {board.map((piece, idx) => (
        <Square
          key={idx}
          isDark={isDarkSquare(idx)}
          handleClick={() => handleClick(piece, idx)}
        >
          {piece && (
            <Piece
              piece={piece}
              turn={turn}
              isSelected={selectedSquare === idx}
              mode={mode}
              side={side}
            />
          )}
        </Square>
      ))}
      {promotion && <Promotion info={promotion} />}
      {isShownGameOver && <GameOver />}
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    board: state.board,
    selectedSquare: state.selectedSquare,
    promotion: state.promotion,
    turn: state.turn,
    isGameOver: state.isGameOver,
    mode: state.mode,
    side: state.actualSide,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    select: (idx: number) => dispatch(selectSquare(idx)),
    moveTo: (idx: number) => dispatch(movePiece(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
