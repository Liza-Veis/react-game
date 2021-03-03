import { Dispatch } from 'react';
import { makeAIMove } from '../redux/chessActions';

const handleMessage = (e: MessageEvent, dispatch: Dispatch<any>) => {
  if (e.data && e.data.includes('bestmove')) {
    const move = e.data.split(' ')[1];
    const from = move.slice(0, 2);
    const to = move.slice(2, 4);
    if (move.length === 5) {
      dispatch(makeAIMove({ from, to, promotion: move[5] }));
    } else {
      dispatch(makeAIMove({ from, to }));
    }
  }
};

export default handleMessage;
