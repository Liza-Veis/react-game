import * as Chess from 'chess.js';
import { generateAIMove } from '../AI/sendMessage';
import {
  DEFAULT_MODE,
  DEFAULT_SIDE,
  DEFAULT_VIEW,
  TColor,
  TMode,
  TBoard,
  TSide,
  TView,
} from '../AppConstants';
import { getRandomSide } from '../utils';
import moveSound from '../audio/move.wav';
import music from '../audio/music.mp3';

type TBoardProps = {
  view: TView;
  turn: TColor;
  mode: TMode;
  actualSide: TSide;
};

const getStoredItem = (name: string): any => {
  if (name === 'fen') {
    return localStorage.getItem('react-chess-fen');
  }
  const settingsJSON = localStorage.getItem('react-chess-settings');
  if (!settingsJSON) {
    return null;
  }
  const settings = JSON.parse(settingsJSON);
  return settings[name] || null;
};

const storeItem = <U, T>(name: U, value: T): void => {
  if (typeof name !== 'string') {
    return;
  }
  if (name === 'fen' && typeof value === 'string') {
    localStorage.setItem('react-chess-fen', value);
    return;
  }
  const settingsJSON = localStorage.getItem('react-chess-settings') || '{}';
  const settings = JSON.parse(settingsJSON);
  const newSettings = { ...settings, [name]: value };
  localStorage.setItem('react-chess-settings', JSON.stringify(newSettings));
};

const startSettings = {
  fen: getStoredItem('fen') || undefined,
  view: (getStoredItem('view') || DEFAULT_VIEW) as TView,
  mode: (getStoredItem('mode') || DEFAULT_MODE) as TMode,
  side: (getStoredItem('side') || DEFAULT_SIDE) as TSide,
  actualSide: getStoredItem('actualSide') as TColor,
};

if (!startSettings.actualSide) {
  const { side } = startSettings;
  startSettings.actualSide = side === 'random' ? getRandomSide() : side;
}

const audio = {
  move: new Audio(moveSound),
  music: new Audio(music),
};

audio.music.loop = true;

const isReversed = (props: TBoardProps): boolean => {
  const { mode, view, turn, actualSide } = props;
  if (mode !== 'with-AI' && view === 'auto-rotate' && turn !== 'w') {
    return true;
  }
  if (mode === 'with-AI' && actualSide === 'b') {
    return true;
  }
  return false;
};

const chess = new (Chess as any)(startSettings.fen);

const getBoard = (data: TBoardProps): TBoard => {
  const board = chess.board().flat();
  if (isReversed(data)) {
    return board.reverse();
  }
  return board;
};

const getResults = (): string => {
  if (chess.in_checkmate()) {
    const winner = chess.turn() === 'w' ? 'BLACK' : 'WHITE';
    return `CHECKMATE: WINNER - ${winner}`;
  }
  if (chess.in_draw()) {
    let reason = '50 MOVES RULE';
    if (chess.in_stalemate()) {
      reason = 'STALEMATE';
    } else if (chess.in_threefold_repetition()) {
      reason = 'THREEFOLD REPETITION';
    } else if (chess.insufficient_material()) {
      reason = 'INSUFFICIENT MATERIAL';
    }
    return `DRAW - ${reason}`;
  }
  return 'UNKNOWN REASON';
};

// make move after reload if ai turn
if (startSettings.mode === 'with-AI') {
  if (chess.turn() !== startSettings.actualSide) {
    generateAIMove(chess.fen());
  }
}

export {
  chess,
  startSettings,
  audio,
  storeItem,
  getStoredItem,
  isReversed,
  getBoard,
  getResults,
};
