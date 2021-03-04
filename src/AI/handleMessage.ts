import { Dispatch } from 'react';
import { makeAIMove } from '../redux/chessActions';

const handleMessage = (e: MessageEvent, dispatch: Dispatch<any>): void => {
  if (e.data && e.data.includes('bestmove')) {
    const move = e.data.split(' ')[1];
    const from = move.slice(0, 2);
    const to = move.slice(2, 4);
    dispatch(makeAIMove({ from, to, promotion: move[5] }));
  }
};

export default handleMessage;
