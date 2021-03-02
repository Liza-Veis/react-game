import React from 'react';

export type PieceType = {
  color: string;
  type: string;
};

type Props = {
  piece: PieceType;
  isSelected: boolean;
  turn: 'w' | 'b';
};

const Piece: React.FC<Props> = ({ piece, isSelected, turn }: Props) => {
  const { type, color } = piece;
  const title = `${color}${type.toUpperCase()}`;
  const img = `./assets/${title}.png`;

  return (
    <div
      className={`piece ${isSelected && 'selected'} ${
        turn === color && 'interactive'
      }`}
    >
      <img src={img} alt={title} />
    </div>
  );
};

export default Piece;
