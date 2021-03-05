import { Move, ShortMove, Square } from 'chess.js';
import { generateAIMove, setAISkillLevel } from '../AI/sendMessage';
import { getIndex, getPosition, getRandomSide } from '../utils';
import {
  audio,
  chess,
  getBoard,
  getResults,
  getStoredItem,
  isReversed,
  startSettings,
  storeItem,
  saveToStatistics,
} from './setup';
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
  UNDO,
  SET_AI_LEVEL,
} from './chessActions/chessActionsTypes';
import {
  DEFAULT_AILEVEL,
  DEFAULT_MODE,
  DEFAULT_MUSIC,
  DEFAULT_SIDE,
  DEFAULT_SOUND,
  DEFAULT_VIEW,
  TColor,
  TMode,
  TPendingPromotion,
  TSide,
  TView,
} from '../AppConstants';
import { TActions } from './chessActions/chessActions.types';

const initialState = {
  board: getBoard({
    view: startSettings.view,
    turn: chess.turn(),
    mode: startSettings.mode,
    actualSide: startSettings.actualSide,
  }),
  selectedSquare: null as number | null,
  promotion: null as TPendingPromotion,
  turn: chess.turn(),
  view: startSettings.view,
  side: startSettings.side,
  actualSide: startSettings.actualSide,
  mode: startSettings.mode,
  isGameOver: false,
  result: null as string | null,
  isSurrender: false,
  music: DEFAULT_MUSIC,
  sound: DEFAULT_SOUND,
  statistics: startSettings.statistics,
  lastMove: null as [number, number] | null,
  posibleMoves: null as number[] | null,
  capturedMoves: null as number[] | null,
  AILevel: startSettings.AILevel,
};

const chessReducer = (
  state = initialState,
  action: TActions
): typeof initialState => {
  switch (action.type) {
    case START_GAME: {
      chess.reset();
      storeItem('fen', '');

      const side: TSide = getStoredItem('side') || DEFAULT_SIDE;
      const view: TView = getStoredItem('view') || DEFAULT_VIEW;
      const mode: TMode = getStoredItem('mode') || DEFAULT_MODE;
      const AILevel: TMode = getStoredItem('AILevel') ?? DEFAULT_AILEVEL;

      const actualSide: TColor = side === 'random' ? getRandomSide() : side;
      storeItem('actualSide', actualSide);
      storeItem('mode', mode);
      storeItem('view', view);
      storeItem('side', side);
      storeItem('AILevel', AILevel);

      if (mode === 'autoplay' || (mode === 'with-AI' && actualSide === 'b')) {
        generateAIMove(chess.fen());
      }

      const boardProps = {
        view: state.view,
        turn: chess.turn(),
        mode,
        actualSide,
      };

      return {
        ...state,
        selectedSquare: null,
        promotion: null,
        turn: chess.turn(),
        view,
        side,
        actualSide,
        mode,
        board: getBoard(boardProps),
        isGameOver: false,
        result: null,
        isSurrender: false,
        lastMove: null,
        posibleMoves: null,
        capturedMoves: null,
      };
    }

    case SELECT_SQUARE: {
      const { view, mode, actualSide, turn } = state;
      const isReversedBoard = isReversed({ view, mode, actualSide, turn });
      const moves = chess.moves({
        square: getPosition(action.payload, isReversedBoard),
        verbose: true,
      });

      const posibleMoves: number[] = [];
      const capturedMoves: number[] = [];

      moves.forEach((move: Move) => {
        if (move.captured) {
          capturedMoves.push(getIndex(move.to, isReversedBoard));
        } else {
          posibleMoves.push(getIndex(move.to, isReversedBoard));
        }
      });

      return {
        ...state,
        selectedSquare: action.payload,
        posibleMoves,
        capturedMoves,
      };
    }

    case MOVE_PIECE: {
      const { selectedSquare, view, turn, mode, actualSide } = state;

      if (!selectedSquare || selectedSquare === action.payload) {
        return state;
      }

      let isReversedBoard = isReversed({ view, turn, mode, actualSide });
      const from = getPosition(selectedSquare, isReversedBoard) as Square;
      const to = getPosition(action.payload, isReversedBoard) as Square;

      const promotions = chess
        .moves({ square: from, verbose: true })
        .filter((m: ShortMove) => m.promotion);

      if (promotions.length > 0) {
        const promise = audio.move.play();
        promise.then().catch();
        const { color } = promotions[0];
        return {
          ...state,
          promotion: { from, to, color },
        };
      }

      const isLegal = chess.move({ from, to });
      if (!isLegal) {
        return {
          ...state,
          selectedSquare: null,
          posibleMoves: null,
          capturedMoves: null,
        };
      }

      storeItem('fen', chess.fen());
      const isGameOver = chess.game_over();
      if (state.sound) {
        const promise = audio.move.play();
        promise.then().catch();
      }

      if (!isGameOver && mode === 'with-AI' && chess.turn() !== actualSide) {
        generateAIMove(chess.fen());
      }

      const boardProps = {
        view: state.view,
        turn: chess.turn(),
        mode,
        actualSide,
      };

      if (view === 'auto-rotate' && mode === 'two-players') {
        isReversedBoard = !isReversedBoard;
      }

      return {
        ...state,
        selectedSquare: null,
        turn: chess.turn(),
        board: getBoard(boardProps),
        isGameOver,
        statistics: isGameOver ? getStoredItem('statistics') : state.statistics,
        result: isGameOver ? getResults({ mode, actualSide }) : null,
        lastMove: [
          getIndex(from, isReversedBoard),
          getIndex(to, isReversedBoard),
        ],
        posibleMoves: null,
        capturedMoves: null,
      };
    }

    case PROMOTE_PAWN: {
      const { from, to, promotion } = action.payload as ShortMove;

      chess.move({ from, to, promotion });
      localStorage.setItem('react-chess-fen', chess.fen());
      const isGameOver = chess.game_over();

      const { mode, actualSide } = state;

      if (
        !isGameOver &&
        ((mode === 'with-AI' && chess.turn() !== actualSide) ||
          mode === 'autoplay')
      ) {
        generateAIMove(chess.fen());
      }

      const boardProps = {
        view: state.view,
        turn: chess.turn(),
        mode,
        actualSide,
      };

      const isReversedBoard = isReversed(boardProps);

      return {
        ...state,
        selectedSquare: null,
        promotion: null,
        turn: chess.turn(),
        board: getBoard(boardProps),
        isGameOver,
        statistics: isGameOver ? getStoredItem('statistics') : state.statistics,
        result: isGameOver ? getResults({ mode, actualSide }) : null,
        lastMove: [
          getIndex(from, isReversedBoard),
          getIndex(to, isReversedBoard),
        ],
        posibleMoves: null,
        capturedMoves: null,
      };
    }

    case MAKE_AI_MOVE: {
      if (state.isSurrender) {
        return { ...state };
      }

      chess.move(action.payload as ShortMove);

      chess.move(action.payload as ShortMove);
      storeItem('fen', chess.fen());
      if (state.sound) {
        const promise = audio.move.play();
        promise.then().catch();
      }

      const isGameOver = chess.game_over();
      const { mode, actualSide, view } = state;

      const boardProps = {
        view,
        mode,
        actualSide,
        turn: chess.turn(),
      };

      const { from, to } = action.payload;
      let isReversedBoard = isReversed(boardProps);
      if (view === 'auto-rotate' && mode === 'two-players') {
        isReversedBoard = !isReversedBoard;
      }

      if (!isGameOver && mode === 'autoplay') {
        generateAIMove(chess.fen());
      }

      return {
        ...state,
        promotion: null,
        turn: chess.turn(),
        board: getBoard(boardProps),
        isGameOver,
        statistics: isGameOver ? getStoredItem('statistics') : state.statistics,
        result: isGameOver ? getResults({ mode, actualSide }) : null,
        lastMove: [
          getIndex(from, isReversedBoard),
          getIndex(to, isReversedBoard),
        ],
      };
    }

    case SURRENDER: {
      let result = 'WINNER - ';
      let winner = '-' as TColor | '-';
      if (state.mode === 'with-AI') {
        winner = state.actualSide === 'w' ? 'b' : 'w';
      } else if (state.mode !== 'autoplay') {
        winner = state.turn === 'w' ? 'b' : 'w';
      }

      if (winner === 'b') {
        result += 'BLACK';
      } else if (winner === 'w') {
        result += 'WHITE';
      } else {
        result = 'DRAW';
      }

      const side = state.mode === 'with-AI' ? state.actualSide : '-';
      saveToStatistics({ mode: state.mode, side, winner });

      return {
        ...state,
        isSurrender: true,
        isGameOver: true,
        result,
        statistics: getStoredItem('statistics'),
      };
    }

    case UNDO: {
      const { mode, isGameOver, promotion, turn, actualSide, view } = state;
      const resetSel = {
        posibleMoves: null,
        capturedMoves: null,
        selectedSquare: null,
      };
      if (mode === 'autoplay') {
        return {
          ...state,
          ...resetSel,
        };
      }
      const history = chess.history({ verbose: true });
      if (history.length < 1) {
        return {
          ...state,
          lastMove: null,
          ...resetSel,
        };
      }
      if (isGameOver || promotion) {
        return {
          ...state,
          ...resetSel,
        };
      }
      if (mode === 'with-AI') {
        if (history.length <= 2 && turn === actualSide) {
          return {
            ...state,
            ...resetSel,
          };
        }
      }
      const isLegal = chess.undo();
      if (isLegal) {
        const promise = audio.move.play();
        promise.then().catch();
      }

      storeItem('fen', chess.fen());

      const lastMove = history.length >= 2 ? history[history.length - 2] : null;

      const isReversedBoard = isReversed({
        mode,
        view,
        turn: chess.turn(),
        actualSide,
      });

      const boardProps = {
        view,
        turn: chess.turn(),
        mode,
        actualSide,
      };

      return {
        ...state,
        board: getBoard(boardProps),
        turn: chess.turn(),
        lastMove: lastMove
          ? [
              getIndex(lastMove.from, isReversedBoard),
              getIndex(lastMove.to, isReversedBoard),
            ]
          : null,
        ...resetSel,
      };
    }

    case SET_VIEW: {
      storeItem('view', action.payload);
      return {
        ...state,
        view: action.payload,
      };
    }

    case SET_SIDE: {
      storeItem('side', action.payload);
      return {
        ...state,
        side: action.payload,
      };
    }

    case SET_MODE: {
      storeItem('mode', action.payload);
      return {
        ...state,
        mode: action.payload,
      };
    }

    case SET_SOUND: {
      audio.move.volume = action.payload;
      return {
        ...state,
        sound: action.payload,
      };
    }

    case SET_AI_LEVEL: {
      storeItem('AILevel', action.payload.toString());
      setAISkillLevel(action.payload);
      return {
        ...state,
        AILevel: action.payload,
      };
    }

    case SET_MUSIC: {
      const { music } = audio;
      if (music.paused && action.payload) {
        const promise = music.play();
        promise.then().catch();
      } else if (!action.payload) {
        music.pause();
      }
      music.volume = action.payload;
      return {
        ...state,
        music: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default chessReducer;
