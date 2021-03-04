import stockfish from './index';

export const generateAIMove = (fen: string): void => {
  stockfish.postMessage(`position fen ${fen}`);
  stockfish.postMessage('go wtime 10000 btime 10000 winc 1000 binc 1000');
};

export const stopSearching = (): void => {
  stockfish.postMessage('quit');
};
