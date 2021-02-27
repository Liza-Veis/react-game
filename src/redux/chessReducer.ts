import * as Chess from 'chess.js';

const chess = new (Chess as any)();

const initialState = {
  board: chess.board(),
};

const chessReducer = (state = initialState, action: any) => {
  return state;
};

export default chessReducer;
