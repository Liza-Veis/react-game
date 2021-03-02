import chessReducer from './chessReducer';
import store from './store';

export type TState = ReturnType<typeof chessReducer>;
export type TDispatch = ReturnType<typeof store.dispatch>;
