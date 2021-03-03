import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TState } from '../../../redux/types';

type Props = {
  result: string | null;
};

const GameOver: React.FC<Props> = ({ result }: Props) => {
  return (
    <div className="game-over">
      <div className="game-over__body">
        <h2 className="game-over__title">Game Over</h2>
        <span className="game-over__result">{result}</span>
        <NavLink to="/" className="btn game-over__btn">
          Menu
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    result: state.result,
  };
};

export default connect(mapStateToProps)(GameOver);
