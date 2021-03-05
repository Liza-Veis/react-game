import React from 'react';

type Props = {
  isDark: boolean;
  isLastMove: boolean | null;
  children: React.ReactNode;
  isPossibleSquare: boolean | null;
  isCapturedSquare: boolean | null;
  lastMoveShown: boolean;
  possibleMovesShown: boolean;
  handleClick: () => void;
};

const Square: React.FC<Props> = (props: Props) => {
  const {
    children,
    isDark,
    handleClick,
    isLastMove,
    isPossibleSquare,
    isCapturedSquare,
    possibleMovesShown,
    lastMoveShown,
  } = props;

  let className = 'square';
  if (isDark) {
    className += ' square--dark';
  }
  if (isLastMove) {
    className += lastMoveShown ? ' square--last-move' : '';
  }
  if (isPossibleSquare) {
    className += ' interactive';
    className += possibleMovesShown ? ' square--possible' : '';
  }
  if (isCapturedSquare) {
    className += ' interactive';
    className += possibleMovesShown ? ' square--captured' : '';
  }
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Square;
