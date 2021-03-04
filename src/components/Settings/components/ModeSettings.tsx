import React from 'react';
import { TMode } from '../../../AppConstants';
import RadioInput from './inputs/RadioInput';

type Props = {
  mode: TMode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ModeSettings: React.FC<Props> = (props: Props) => {
  const { handleChange, mode } = props;

  return (
    <div className="settings__item">
      <h3 className="settings__title">Mode</h3>
      <div className="settings__box" onChange={handleChange}>
        <RadioInput
          name="mode"
          value="with-AI"
          checked={mode === 'with-AI'}
          label="With AI"
        />

        <RadioInput
          name="mode"
          value="two-players"
          checked={mode === 'two-players'}
          label="Two players"
        />
      </div>
    </div>
  );
};

export default ModeSettings;
