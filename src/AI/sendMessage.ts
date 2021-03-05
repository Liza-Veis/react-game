import stockfish from './index';

export const generateAIMove = (fen: string): void => {
  stockfish.postMessage(`position fen ${fen}`);
  stockfish.postMessage('go wtime 3000 btime 3000 winc 1000 binc 1000');
};

export const setAISkillLevel = (value: number): void => {
  const level = value * 20;
  stockfish.postMessage(`setoption name Skill Level value ${level}`);

  const errorProbab = Math.round(level * 6.35 + 1);
  const maxErr = Math.round(level * -0.5 + 10);

  stockfish.postMessage(
    `setoption name Skill Level Maximum Error value ${maxErr}`
  );
  stockfish.postMessage(
    `setoption name Skill Level Probability value ${errorProbab}`
  );
};

export const stopSearching = (): void => {
  stockfish.postMessage('quit');
};
