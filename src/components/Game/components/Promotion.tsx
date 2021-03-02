import React from 'react';
import { connect } from 'react-redux';
import { promotePawn } from '../../../redux/chessActions';
import { TDispatch } from '../../../redux/types';

type Props = {
  info: {
    from: string;
    to: string;
    color: string;
  };

  promote: (promotionInfo: {
    from: string;
    to: string;
    promotion: string;
  }) => void;
};

const Promotion: React.FC<Props> = ({
  info: { color, from, to },
  promote,
}: Props) => {
  const promotionPieces = ['q', 'n', 'r', 'b'];

  const handleClick = (promotion: string) => {
    promote({ from, to, promotion });
  };

  return (
    <div className="promotion">
      <div className="promotion__body">
        <h2 className="promotion__title">Pawn promotion</h2>
        <div className="promotion__box">
          {promotionPieces.map((piece, idx) => {
            const title = `${color}${piece.toUpperCase()}`;
            return (
              <div
                key={idx}
                className="promotion__item interactive"
                onClick={() => handleClick(piece)}
              >
                <img src={`./assets/${title}.png`} alt={title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    promote: (promotionInfo: { from: string; to: string; promotion: string }) =>
      dispatch(promotePawn(promotionInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Promotion);
