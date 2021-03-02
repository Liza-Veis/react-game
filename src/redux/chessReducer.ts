import * as Chess from 'chess.js';
import { getPosition } from '../utils';
import { SELECT_SQUARE, MOVE_PIECE } from './chessActionsTypes';

const chess = new (Chess as any)();

const initialState = {
  board: chess.board().flat(),
  selectedSquare: null as number | null,
};

const chessReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
      chess.move({ from, to });

      return {
        ...state,
        selectedSquare: null,
        board: chess.board().flat(),
      };
    }
    default: {
      return state;
    }
  }
};

export default chessReducer;
