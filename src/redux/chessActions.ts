import { MOVE_PIECE, SELECT_SQUARE } from './chessActionsTypes';

export const selectSquare = (idx: number) => {
  return {
    type: SELECT_SQUARE,
    payload: idx,
  };
};

export const movePiece = (idx: number) => {
  return {
    type: MOVE_PIECE,
    payload: idx,
  };
};
