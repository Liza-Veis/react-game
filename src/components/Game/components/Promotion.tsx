import React from 'react';
import { connect } from 'react-redux';
import { TPendingPromotion, TPromotion } from '../../../AppConstants';
import { promotePawn } from '../../../redux/chessActions';
import { TDispatch } from '../../../redux/types';

type Props = {
  data: TPendingPromotion;
  promote: (data: TPromotion) => void;
};

const Promotion: React.FC<Props> = ({ data, promote }: Props) => {
  const promotionPieces = ['q', 'n', 'r', 'b'];
  const color = data?.color;

  const handleClick = (promotion: string) => {
    if (!data) return;
    const { from, to } = data;
    promote({ from, to, promotion });
  };
  return (
    <div className="promotion">
      <div className="promotion__body">
        <h2 className="promotion__title">Pawn promotion</h2>
        <div className="promotion__box">
          {promotionPieces.map((piece, idx) => {
            const title = `${color}${piece.toUpperCase()}`;
            /* eslint-disable jsx-a11y/no-static-element-interactions */
            /* eslint-disable jsx-a11y/click-events-have-key-events */
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
    promote: (data: TPromotion) => dispatch(promotePawn(data)),
  };
};

export default connect(null, mapDispatchToProps)(Promotion);
