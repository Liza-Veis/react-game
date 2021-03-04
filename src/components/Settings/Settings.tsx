import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TMode, TSide, TView } from '../../AppConstants';
import {
  setMode,
  setMusic,
  setSide,
  setSound,
  setView,
} from '../../redux/chessActions';
import { TDispatch, TState } from '../../redux/types';
import AiSettings from './components/AiSettings';
import AudioSettings from './components/AudioSettings';
import FullscreenSettings from './components/FullscreenSettings';
import ModeSettings from './components/ModeSettings';
import TwoPlayersSettings from './components/TwoPlayersSettings';

type Props = {
  side: TSide;
  view: TView;
  mode: TMode;
  sound: number;
  music: number;
  fullscreen: [boolean, () => void];
  setView: (value: TView) => void;
  setSide: (value: TSide) => void;
  setMode: (value: TMode) => void;
  setMusic: (value: number) => void;
  setSound: (value: number) => void;
};

const Settings: React.FC<Props> = (props: Props) => {
  const { side, view, mode, sound, music, fullscreen } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'view': {
        props.setView(e.target.value as TView);
        break;
      }
      case 'side': {
        props.setSide(e.target.value as TSide);
        break;
      }
      case 'mode': {
        props.setMode(e.target.value as TMode);
        break;
      }
      case 'music': {
        props.setMusic(+e.target.value);
        break;
      }
      case 'sound': {
        props.setSound(+e.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div className="settings">
      <NavLink className="btn settings__btn" to="/">
        Back
      </NavLink>

      <ModeSettings handleChange={handleChange} mode={mode} />
      {mode === 'with-AI' && (
        <AiSettings handleChange={handleChange} side={side} />
      )}
      {mode === 'two-players' && (
        <TwoPlayersSettings handleChange={handleChange} view={view} />
      )}

      <AudioSettings handleChange={handleChange} music={music} sound={sound} />
      <FullscreenSettings fullscreen={fullscreen} />
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    side: state.side,
    view: state.view,
    mode: state.mode,
    sound: state.sound,
    music: state.music,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    setSide: (value: TSide) => dispatch(setSide(value)),
    setView: (value: TView) => dispatch(setView(value)),
    setMode: (value: TMode) => dispatch(setMode(value)),
    setSound: (value: number) => dispatch(setSound(value)),
    setMusic: (value: number) => dispatch(setMusic(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
