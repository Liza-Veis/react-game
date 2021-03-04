import React from 'react';
import RadioInput from './inputs/RadioInput';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  view: string;
};

const TwoPlayersSettings: React.FC<Props> = ({ handleChange, view }: Props) => {
  return (
    <>
      <div className="settings__item">
        <h3 className="settings__title">View</h3>
        <div className="settings__box" onChange={handleChange}>
          <RadioInput
            name="view"
            value="auto-rotate"
            checked={view === 'auto-rotate'}
            label="Auto rotate"
          />
          <RadioInput
            name="view"
            value="fixed"
            checked={view === 'fixed'}
            label="Fixed"
          />
        </div>
      </div>
    </>
  );
};

export default TwoPlayersSettings;
