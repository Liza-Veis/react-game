import React from 'react';

export type PieceType = {
  color: string;
  type: string;
};

type Props = {
  piece: PieceType;
};

const Piece: React.FC<Props> = ({ piece: { type, color } }: Props) => {
  const title = `${color}${type.toUpperCase()}`;
  const img = `./assets/${title}.png`;

  return (
    <div className="piece">
      <img src={img} alt={title} />
    </div>
  );
};

export default Piece;
