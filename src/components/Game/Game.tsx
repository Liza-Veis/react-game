import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { TDispatch, TState } from '../../redux/types';
import Board from './components/Board';
import { stopSearching } from '../../AI/sendMessage';
import { surrender, undo } from '../../redux/chessActions';
import useHotkeys from '../../hooks/useHotkeys';
import { TMode } from '../../AppConstants';

type Props = {
  isGameOver: boolean;
  mode: TMode;
  surrender: () => void;
  undo: () => void;
};

const Game: React.FC<Props> = (props: Props) => {
  const { isGameOver, mode, undo: undoFn, surrender: surrenderFn } = props;

  const [isLastMoveShown, setIsLastMoveShown] = useState(true);
  const [isPossibleMovesShown, setIsPossibleMovesShown] = useState(true);

  useHotkeys('KeyH', () => setIsLastMoveShown(!isLastMoveShown));
  useHotkeys('KeyM', () => setIsPossibleMovesShown(!isPossibleMovesShown));

  const [moveTimeout, setMoveTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>();

  const handleUndo = useCallback(() => {
    if (moveTimeout) return;
    undoFn();
    if (mode === 'with-AI') {
      const timeout = setTimeout(() => {
        undoFn();
        setMoveTimeout(null);
      }, 800);
      setMoveTimeout(timeout);
    }
  }, [mode, undoFn, moveTimeout]);

  useHotkeys('KeyS', surrenderFn);
  useHotkeys('KeyU', handleUndo);

  const handleClick = () => {
    surrenderFn();
    stopSearching();
  };

  return (
    <div className="game">
      <Board
        lastMoveShown={isLastMoveShown}
        possibleMovesShown={isPossibleMovesShown}
      />
      {!isGameOver && (
        <button className="btn game__btn" onClick={handleClick} type="button">
          Surrender
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    isGameOver: state.isGameOver,
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    surrender: () => dispatch(surrender()),
    undo: () => dispatch(undo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
