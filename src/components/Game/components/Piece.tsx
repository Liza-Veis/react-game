import React from 'react';

export type PieceType = {
  color: string;
  type: string;
};

type Props = {
  piece: PieceType;
  isSelected: boolean;
  turn: string;
  mode: string;
  side: string;
};

const Piece: React.FC<Props> = ({
  piece,
  isSelected,
  turn,
  mode,
  side,
}: Props) => {
  const { type, color } = piece;
  const title = `${color}${type.toUpperCase()}`;
  const img = `./assets/${title}.png`;
  const selectedClass = isSelected ? 'selected' : '';
  let interactiveClass = '';

  if (turn === color) {
    if (mode === 'with-AI') {
      if (side === color) {
        interactiveClass = 'interactive';
      }
    } else {
      interactiveClass = 'interactive';
    }
  }

  const className = `piece ${selectedClass} ${interactiveClass}`;

  return (
    <div className={className}>
      <img src={img} alt={title} />
    </div>
  );
};

export default Piece;
