import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSide, setView } from '../../redux/chessActions';
import { TDispatch, TState } from '../../redux/types';

type Props = {
  side: 'w' | 'b' | 'random';
  view: 'auto-rotate' | 'fixed';
  setView: (value: string) => void;
  setSide: (value: string) => void;
};

const Settings: React.FC<Props> = (props: Props) => {
  const { side, view } = props;
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'view') {
      props.setView(e.target.value);
    } else if (e.target.name === 'side') {
      props.setSide(e.target.value);
    }
  };

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="settings">
      <button className="btn settings__btn" onClick={handleClick} type="button">
        Back
      </button>
      <div className="settings__item">
        <h3 className="settings__title">View</h3>
        <div className="settings__box" onChange={handleChange}>
          <span>
            <input
              type="radio"
              name="view"
              value="auto-rotate"
              defaultChecked={view === 'auto-rotate'}
            />
            Auto rotate
          </span>
          <span>
            <input
              type="radio"
              name="view"
              value="fixed"
              defaultChecked={view === 'fixed'}
            />
            Fixed
          </span>
        </div>
      </div>
      <div className="settings__item">
        <h3 className="settings__title">Side</h3>
        <div className="settings__box" onChange={handleChange}>
          <span>
            <input
              type="radio"
              name="side"
              value="w"
              defaultChecked={side === 'w'}
            />
            White
          </span>
          <span>
            <input
              type="radio"
              name="side"
              value="b"
              defaultChecked={side === 'b'}
            />
            Black
          </span>
          <span>
            <input
              type="radio"
              name="side"
              value="random"
              defaultChecked={side === 'random'}
            />
            Random
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    side: state.side,
    view: state.view,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    setSide: (value: string) => dispatch(setSide(value)),
    setView: (value: string) => dispatch(setView(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
