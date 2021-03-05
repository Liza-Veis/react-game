import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TDispatch, TState } from '../../../redux/types';
import Square from './Square';
import Piece from './Piece';
import { movePiece, selectSquare } from '../../../redux/chessActions';
import { isDarkSquare } from '../../../utils';
import Promotion from './Promotion';
import GameOver from './GameOver';
import {
  TBoard,
  TColor,
  TMode,
  TPendingPromotion,
  TPiece,
  TSide,
} from '../../../AppConstants';

type Props = {
  board: TBoard;
  selectedSquare: number | null;
  promotion: TPendingPromotion;
  turn: TColor;
  isGameOver: boolean;
  mode: TMode;
  side: TSide;
  isSurrender: boolean;
  lastMove: [number, number] | null;
  possibleMoves: number[] | null;
  capturedMoves: number[] | null;
  lastMoveShown: boolean;
  possibleMovesShown: boolean;
  selectSquare: (idx: number) => void;
  movePiece: (idx: number) => void;
};

const Board: React.FC<Props> = (props: Props) => {
  const {
    board,
    selectedSquare,
    promotion,
    turn,
    isGameOver,
    mode,
    side,
    isSurrender,
    lastMove,
    possibleMoves,
    capturedMoves,
    lastMoveShown,
    possibleMovesShown,
  } = props;

  const [isShownGameOver, setIsShownGameOver] = useState(isGameOver);

  useEffect(() => {
    const time = isSurrender ? 0 : 1000;
    const timeout = setTimeout(() => {
      setIsShownGameOver(isGameOver);
    }, time);
    return () => clearTimeout(timeout);
  }, [isGameOver, isSurrender]);

  const handleClick = (piece: TPiece | null, idx: number) => {
    if (selectedSquare === idx || (mode === 'with-AI' && turn !== side)) {
      return;
    }
    if (!piece) {
      props.movePiece(idx);
      return;
    }
    if (piece.color !== turn) {
      if (selectedSquare) {
        props.movePiece(idx);
      }
      return;
    }

    const targetPiece = board[idx];
    if (targetPiece && targetPiece.color === piece.color) {
      props.selectSquare(idx);
    } else if (selectedSquare) {
      props.movePiece(idx);
    }
  };

  return (
    <div className="board">
      {board.map((piece, idx) => (
        <Square
          key={idx}
          isDark={isDarkSquare(idx)}
          handleClick={() => handleClick(piece, idx)}
          isLastMove={lastMove && lastMove.includes(idx)}
          isPossibleSquare={possibleMoves && possibleMoves.includes(idx)}
          isCapturedSquare={capturedMoves && capturedMoves.includes(idx)}
          lastMoveShown={lastMoveShown}
          possibleMovesShown={possibleMovesShown}
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
      {promotion && <Promotion data={promotion} />}
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
    isSurrender: state.isSurrender,
    lastMove: state.lastMove,
    possibleMoves: state.posibleMoves,
    capturedMoves: state.capturedMoves,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    selectSquare: (idx: number) => dispatch(selectSquare(idx)),
    movePiece: (idx: number) => dispatch(movePiece(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
