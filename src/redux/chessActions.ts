import {
  MAKE_AI_MOVE,
  MOVE_PIECE,
  PROMOTE_PAWN,
  SELECT_SQUARE,
  SET_MODE,
  SET_MUSIC,
  SET_SIDE,
  SET_SOUND,
  SET_VIEW,
  START_GAME,
  SURRENDER,
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

export const setMusic = (value: number) => {
  return {
    type: SET_MUSIC,
    payload: value,
  };
};

export const setSound = (value: number) => {
  return {
    type: SET_SOUND,
    payload: value,
  };
};

export const surrender = () => {
  return {
    type: SURRENDER,
  };
};
