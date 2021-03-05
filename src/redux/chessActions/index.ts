import { TMode, TPromotion, TSide, TView } from '../../AppConstants';
import {
  IMakeAIMove,
  IMovePiece,
  IPromotePawn,
  ISelectSquare,
  ISetAILevel,
  ISetMode,
  ISetMusic,
  ISetSide,
  ISetSound,
  ISetView,
  IStartGame,
  ISurrender,
  IUndo,
} from './chessActions.types';
import {
  MAKE_AI_MOVE,
  MOVE_PIECE,
  PROMOTE_PAWN,
  SELECT_SQUARE,
  SET_AI_LEVEL,
  SET_MODE,
  SET_MUSIC,
  SET_SIDE,
  SET_SOUND,
  SET_VIEW,
  START_GAME,
  SURRENDER,
  UNDO,
} from './chessActionsTypes';

export const selectSquare = (idx: number): ISelectSquare => {
  return {
    type: SELECT_SQUARE,
    payload: idx,
  };
};

export const movePiece = (idx: number): IMovePiece => {
  return {
    type: MOVE_PIECE,
    payload: idx,
  };
};

export const promotePawn = (data: TPromotion): IPromotePawn => {
  return {
    type: PROMOTE_PAWN,
    payload: data,
  };
};

export const makeAIMove = (data: {
  from: string;
  to: string;
  promotion: string | undefined;
}): IMakeAIMove => {
  return {
    type: MAKE_AI_MOVE,
    payload: data,
  };
};

export const startGame = (): IStartGame => {
  return {
    type: START_GAME,
  };
};

export const setView = (value: TView): ISetView => {
  return {
    type: SET_VIEW,
    payload: value,
  };
};

export const setSide = (value: TSide): ISetSide => {
  return {
    type: SET_SIDE,
    payload: value,
  };
};

export const setMode = (value: TMode): ISetMode => {
  return {
    type: SET_MODE,
    payload: value,
  };
};

export const setMusic = (value: number): ISetMusic => {
  return {
    type: SET_MUSIC,
    payload: value,
  };
};

export const setSound = (value: number): ISetSound => {
  return {
    type: SET_SOUND,
    payload: value,
  };
};

export const surrender = (): ISurrender => {
  return {
    type: SURRENDER,
  };
};

export const undo = (): IUndo => {
  return {
    type: UNDO,
  };
};

export const setAILevel = (value: number): ISetAILevel => {
  return {
    type: SET_AI_LEVEL,
    payload: value,
  };
};
