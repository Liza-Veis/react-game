import * as Chess from 'chess.js';
import { generateAIMove } from '../AI/sendMessage';
import { getPosition, getRandomSide } from '../utils';
import moveSoundSrc from '../audio/move.wav';
import musicSrc from '../audio/music.mp3';

import {
  SELECT_SQUARE,
  MOVE_PIECE,
  PROMOTE_PAWN,
  START_GAME,
  SET_VIEW,
  SET_SIDE,
  SET_MODE,
  MAKE_AI_MOVE,
  SURRENDER,
  SET_SOUND,
  SET_MUSIC,
} from './chessActionsTypes';

// const promotion = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5';
// const stalemate = '4k3/4P3/8/4K3/8/8/8/8 w - - 0 78';
// const material = 'k7/8/n7/8/8/8/8/7K b - - 0 1';
// const checkmate =
//   'rnb1kbnr/pppp1ppp/8/4p1q1/5PP1/8/PPPPP2P/RNBQKBNR b KQkq - 1 3';

const DEFAULT_VIEW = 'fixed';
const DEFAULT_SIDE = 'random';
const DEFAULT_MODE = 'with-AI';
const DEFAULT_SOUND = 0.5;
const DEFAULT_MUSIC = 0;

type TView = 'fixed' | 'auto-rotate';
type TMode = 'two-players' | 'with-AI';
type TSide = 'w' | 'b' | 'random';

const startFen = localStorage.getItem('react-chess-fen') || undefined;
const startView = localStorage.getItem('react-chess-view') || DEFAULT_VIEW;
const startSide = localStorage.getItem('react-chess-side') || DEFAULT_SIDE;
const startMode = localStorage.getItem('react-chess-mode') || DEFAULT_MODE;
let startActualSide = localStorage.getItem('react-chess-actual-side');
if (!startActualSide) {
  startActualSide = startSide === 'random' ? getRandomSide() : startSide;
}
const chess = new (Chess as any)(startFen);

if (startMode === 'with-AI' && chess.turn() !== startActualSide) {
  generateAIMove(chess.fen());
}

const moveSound = new Audio();
moveSound.src = moveSoundSrc;
moveSound.volume = DEFAULT_SOUND;

const music = new Audio();
music.loop = true;
music.src = musicSrc;
music.volume = DEFAULT_MUSIC;

const getBoard = (
  view: 'fixed' | 'auto-rotate',
  turn: string,
  mode: TMode,
  side: string
) => {
  const board = chess.board().flat();
  if (mode !== 'with-AI' && view === 'auto-rotate' && turn !== 'w') {
    return board.reverse();
  }
  if (mode === 'with-AI' && side === 'b') {
    return board.reverse();
  }
  return board;
};

const getResults = () => {
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

const initialState = {
  board: getBoard(
    startView as TView,
    chess.turn(),
    startMode as TMode,
    startActualSide as 'w' | 'b'
  ),
  selectedSquare: null as number | null,
  promotion: null as { from: string; to: string; color: string } | null,
  turn: chess.turn() as 'w' | 'b',
  view: startView as TView,
  side: startSide as TSide,
  actualSide: startActualSide as 'w' | 'b',
  mode: startMode as TMode,
  isGameOver: false,
  result: null as string | null,
  isSurrender: false,
  music: DEFAULT_MUSIC,
  sound: DEFAULT_SOUND,
};

const chessReducer = (
  state = initialState,
  action: any
): typeof initialState => {
  switch (action.type) {
    case START_GAME: {
      chess.reset();

      localStorage.setItem('react-chess-fen', '');
      const side = (localStorage.getItem('react-chess-side') ||
        DEFAULT_SIDE) as TSide;
      const view = (localStorage.getItem('react-chess-view') ||
        DEFAULT_VIEW) as TView;
      const mode = (localStorage.getItem('react-chess-mode') ||
        DEFAULT_MODE) as TMode;

      const actualSide = side === 'random' ? getRandomSide() : side;
      localStorage.setItem('react-chess-actual-side', actualSide);

      if (mode === 'with-AI' && actualSide === 'b') {
        generateAIMove(chess.fen());
      }

      return {
        ...state,
        selectedSquare: null,
        promotion: null,
        turn: chess.turn() as 'w' | 'b',
        view,
        side,
        actualSide,
        mode,
        board: getBoard(state.view, chess.turn(), mode, actualSide),
        isGameOver: false,
        result: null,
        isSurrender: false,
      };
    }
    case SELECT_SQUARE: {
      return {
        ...state,
        selectedSquare: action.payload,
      };
    }

    case MOVE_PIECE: {
      const { selectedSquare, view, turn, mode, actualSide } = state;
      if (!selectedSquare || selectedSquare === action.payload) {
        return state;
      }

      let isReversed = mode === 'with-AI' && actualSide === 'b';
      if (mode !== 'with-AI' && view === 'auto-rotate' && turn === 'b') {
        isReversed = true;
      }

      const from = getPosition(selectedSquare, isReversed);
      const to = getPosition(action.payload, isReversed);
      const promotions: [{ [key: string]: string }] = chess
        .moves({ verbose: true })
        .filter((m: { [key: string]: string }) => m.promotion);

      if (promotions.some((p) => p.from === from && p.to === to)) {
        moveSound.play();
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
      const isGameOver = chess.game_over();

      if (state.sound) {
        moveSound.play();
      }

      if (!isGameOver && mode === 'with-AI' && chess.turn() !== actualSide) {
        generateAIMove(chess.fen());
      }

      return {
        ...state,
        selectedSquare: null,
        turn: chess.turn(),
        board: getBoard(state.view, chess.turn(), mode, actualSide),
        isGameOver,
        result: isGameOver ? getResults() : null,
      };
    }

    case PROMOTE_PAWN: {
      const { from, to, promotion: p } = action.payload;

      chess.move({ from, to, promotion: p });
      localStorage.setItem('react-chess-fen', chess.fen());
      const isGameOver = chess.game_over();

      const { mode, actualSide } = state;
      if (!isGameOver && mode === 'with-AI' && chess.turn() !== actualSide) {
        generateAIMove(chess.fen());
      }

      return {
        ...state,
        selectedSquare: null,
        promotion: null,
        turn: chess.turn(),
        board: getBoard(state.view, chess.turn(), mode, actualSide),
        isGameOver,
        result: isGameOver ? getResults() : null,
      };
    }

    case MAKE_AI_MOVE: {
      if (state.isSurrender) {
        return { ...state };
      }

      const { from, to, promotion: p } = action.payload;
      const move = { from, to } as {
        from: string;
        to: string;
        promotion?: string;
      };

      if (p) {
        move.promotion = p;
      }

      chess.move({ from, to });
      localStorage.setItem('react-chess-fen', chess.fen());
      if (state.sound) {
        moveSound.play();
      }

      const isGameOver = chess.game_over();
      const { mode, actualSide } = state;

      return {
        ...state,
        selectedSquare: null,
        promotion: null,
        turn: chess.turn(),
        board: getBoard(state.view, chess.turn(), mode, actualSide),
        isGameOver,
        result: isGameOver ? getResults() : null,
      };
    }

    case SET_VIEW: {
      localStorage.setItem('react-chess-view', action.payload);
      return {
        ...state,
        view: action.payload,
      };
    }

    case SET_SIDE: {
      localStorage.setItem('react-chess-side', action.payload);
      return {
        ...state,
        side: action.payload,
      };
    }

    case SET_MODE: {
      localStorage.setItem('react-chess-mode', action.payload);
      return {
        ...state,
        mode: action.payload,
      };
    }

    case SET_SOUND: {
      moveSound.volume = action.payload;
      return {
        ...state,
        sound: action.payload,
      };
    }

    case SET_MUSIC: {
      if (music.paused && action.payload) {
        music.play();
      } else if (!action.payload) {
        music.pause();
      }
      music.volume = action.payload;
      return {
        ...state,
        music: action.payload,
      };
    }

    case SURRENDER: {
      return {
        ...state,
        isSurrender: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default chessReducer;
