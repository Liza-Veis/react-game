import * as Chess from 'chess.js';
import { getPosition, getRandomSide } from '../utils';
import {
  SELECT_SQUARE,
  MOVE_PIECE,
  PROMOTE_PAWN,
  START_GAME,
  SET_VIEW,
  SET_SIDE,
} from './chessActionsTypes';

const promotion = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5';
const fen = localStorage.getItem('react-chess-fen');
const startView = localStorage.getItem('react-chess-view') || 'fixed';
const startSide = localStorage.getItem('react-chess-side') || 'random';
const chess = new (Chess as any)(fen || undefined);

const getBoard = (view: 'fixed' | 'auto-rotate', turn: 'w' | 'b') => {
  const board = chess.board().flat();
  if (view === 'auto-rotate' && turn !== 'w') {
    return board.reverse();
  }
  return board;
};

const initialState = {
  board: getBoard(startView as 'fixed' | 'auto-rotate', chess.turn()),
  selectedSquare: null as number | null,
  promotion: null as { from: string; to: string; color: string } | null,
  turn: chess.turn() as 'w' | 'b',
  view: startView as 'fixed' | 'auto-rotate',
  side: startSide as 'w' | 'b' | 'random',
};

const chessReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_GAME: {
      chess.reset();
      localStorage.setItem('react-chess-fen', '');
      return {
        ...initialState,
        turn: chess.turn() as 'w' | 'b',
        view: localStorage.getItem('react-chess-view') || 'fixed',
        board: getBoard(state.view, chess.turn()),
      };
    }
    case SELECT_SQUARE: {
      return {
        ...state,
        selectedSquare: action.payload,
      };
    }

    case MOVE_PIECE: {
      const { selectedSquare } = state;
      if (!selectedSquare || selectedSquare === action.payload) {
        return state;
      }

      const isReversed = state.view === 'auto-rotate' && state.turn === 'b';

      const from = getPosition(selectedSquare, isReversed);
      const to = getPosition(action.payload, isReversed);
      const promotions: [{ [key: string]: string }] = chess
        .moves({ verbose: true })
        .filter((m: { [key: string]: string }) => m.promotion);

      if (promotions.some((p) => p.from === from && p.to === to)) {
        const { color } = promotions[0];
        return {
          ...state,
          promotion: { from, to, color },
        };
      }
      const isLegal = chess.move({ from, to });
      if (!isLegal) {
        return { ...state, selectedSquare: null };
      }

      localStorage.setItem('react-chess-fen', chess.fen());

      return {
        ...state,
        selectedSquare: null,
        turn: chess.turn(),
        board: getBoard(state.view, chess.turn()),
      };
    }

    case PROMOTE_PAWN: {
      const { from, to, promotion: p } = action.payload;
      chess.move({ from, to, promotion: p });

      localStorage.setItem('react-chess-fen', chess.fen());

      return {
        ...state,
        selectedSquare: null,
        promotion: null,
        turn: chess.turn(),
        board: getBoard(state.view, chess.turn()),
      };
    }

    case SET_VIEW: {
      localStorage.setItem('react-chess-view', action.payload);
      return {
        ...state,
        view: action.payload,
      };
    }

    case SET_SIDE: {
      localStorage.setItem('react-chess-side', action.payload);
      return {
        ...state,
        side: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default chessReducer;
