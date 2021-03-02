import * as Chess from 'chess.js';
import { getPosition } from '../utils';
import {
  SELECT_SQUARE,
  MOVE_PIECE,
  PROMOTE_PAWN,
  START_GAME,
} from './chessActionsTypes';

const promotion = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5';
const fen = localStorage.getItem('react-chess-fen');
const chess = new (Chess as any)(fen || undefined);

const initialState = {
  board: chess.board().flat(),
  selectedSquare: null as number | null,
  promotion: null as { from: string; to: string; color: string } | null,
  turn: chess.turn() as 'w' | 'b',
};

const chessReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_GAME: {
      chess.reset();
      localStorage.setItem('react-chess-fen', '');
      return {
        ...initialState,
        board: chess.board().flat(),
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

      const from = getPosition(selectedSquare);
      const to = getPosition(action.payload);
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
        board: chess.board().flat(),
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
        board: chess.board().flat(),
      };
    }

    default: {
      return state;
    }
  }
};

export default chessReducer;
