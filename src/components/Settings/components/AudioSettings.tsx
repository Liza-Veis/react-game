import React from 'react';
import RangeInput from './inputs/RangeInput';

type Props = {
  music: number;
  sound: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AudioSettings: React.FC<Props> = (props: Props) => {
  const { handleChange, music, sound } = props;

  return (
    <div className="settings__item audio">
      <h3 className="settings__title">Audio</h3>
      <div className="settings__box" onChange={handleChange}>
        <RangeInput name="music" value={music} label="Music:" />
        <RangeInput name="sound" value={sound} label="Sound:" />
      </div>
    </div>
  );
};

export default AudioSettings;
