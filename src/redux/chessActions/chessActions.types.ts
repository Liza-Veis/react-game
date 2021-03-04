import { TMode, TPromotion, TSide, TView } from '../../AppConstants';
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

export interface ISelectSquare {
  type: typeof SELECT_SQUARE;
  payload: number;
}

export interface IMovePiece {
  type: typeof MOVE_PIECE;
  payload: number;
}

export interface IPromotePawn {
  type: typeof PROMOTE_PAWN;
  payload: TPromotion;
}

export interface IStartGame {
  type: typeof START_GAME;
}

export interface ISetView {
  type: typeof SET_VIEW;
  payload: TView;
}

export interface ISetSide {
  type: typeof SET_SIDE;
  payload: TSide;
}

export interface ISetMode {
  type: typeof SET_MODE;
  payload: TMode;
}

export interface ISetSound {
  type: typeof SET_SOUND;
  payload: number;
}

export interface ISetMusic {
  type: typeof SET_MUSIC;
  payload: number;
}

export interface ISurrender {
  type: typeof SURRENDER;
}

export interface IMakeAIMove {
  type: typeof MAKE_AI_MOVE;
  payload: {
    from: string;
    to: string;
    promotion: string | undefined;
  };
}

export type TActions =
  | ISelectSquare
  | IMovePiece
  | IPromotePawn
  | IStartGame
  | ISetSide
  | ISetMode
  | ISetView
  | ISetSound
  | ISetMusic
  | ISurrender
  | IMakeAIMove;
