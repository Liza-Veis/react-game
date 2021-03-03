import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setMode, setSide, setView } from '../../redux/chessActions';
import { TDispatch, TState } from '../../redux/types';
import AiSettings from './components/AiSettings';
import TwoPlayersSettings from './components/TwoPlayersSettings';

type Props = {
  side: string;
  view: string;
  mode: string;
  setView: (value: string) => void;
  setSide: (value: string) => void;
  setMode: (value: string) => void;
};

const Settings: React.FC<Props> = (props: Props) => {
  const { side, view, mode } = props;
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'view':
        props.setView(e.target.value);
        break;
      case 'side':
        props.setSide(e.target.value);
        break;
      case 'mode':
        props.setMode(e.target.value);
        break;
      default:
        break;
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
        <h3 className="settings__title">Mode</h3>
        <div className="settings__box" onChange={handleChange}>
          <span>
            <input
              type="radio"
              name="mode"
              value="with-AI"
              defaultChecked={mode === 'with-AI'}
            />
            With AI
          </span>
          <span>
            <input
              type="radio"
              name="mode"
              value="two-players"
              defaultChecked={mode === 'two-players'}
            />
            Two players
          </span>
        </div>
      </div>

      {mode === 'with-AI' && (
        <AiSettings handleChange={handleChange} side={side} />
      )}
      {mode === 'two-players' && (
        <TwoPlayersSettings handleChange={handleChange} view={view} />
      )}
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    side: state.side,
    view: state.view,
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    setSide: (value: string) => dispatch(setSide(value)),
    setView: (value: string) => dispatch(setView(value)),
    setMode: (value: string) => dispatch(setMode(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
