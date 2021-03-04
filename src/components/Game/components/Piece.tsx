import React from 'react';
import { TColor, TMode, TPiece, TSide } from '../../../AppConstants';

type Props = {
  piece: TPiece;
  isSelected: boolean;
  turn: TColor;
  mode: TMode;
  side: TSide;
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
