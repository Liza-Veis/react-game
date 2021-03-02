import {
  MOVE_PIECE,
  PROMOTE_PAWN,
  SELECT_SQUARE,
  START_GAME,
} from './chessActionsTypes';

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

export const promotePawn = (info: {
  from: string;
  to: string;
  promotion: string;
}) => {
  return {
    type: PROMOTE_PAWN,
    payload: info,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};
