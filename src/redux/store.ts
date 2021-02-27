import { createStore } from 'redux';
import chessReducer from './chessReducer';

const store = createStore(chessReducer);

export default store;
