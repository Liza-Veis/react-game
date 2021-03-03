import {
  MAKE_AI_MOVE,
  MOVE_PIECE,
  PROMOTE_PAWN,
  SELECT_SQUARE,
  SET_MODE,
  SET_SIDE,
  SET_VIEW,
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

export const makeAIMove = (move: {
  from: string;
  to: string;
  promotion?: string;
}) => {
  const payload = { ...move };
  return {
    type: MAKE_AI_MOVE,
    payload,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const setView = (value: string) => {
  return {
    type: SET_VIEW,
    payload: value,
  };
};

export const setSide = (value: string) => {
  return {
    type: SET_SIDE,
    payload: value,
  };
};

export const setMode = (value: string) => {
  return {
    type: SET_MODE,
    payload: value,
  };
};
