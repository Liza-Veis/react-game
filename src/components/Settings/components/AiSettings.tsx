import React from 'react';
import RadioInput from './inputs/RadioInput';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  side: string;
};

const AiSettings: React.FC<Props> = ({ handleChange, side }: Props) => {
  return (
    <>
      <div className="settings__item">
        <h3 className="settings__title">Side</h3>
        <div className="settings__box" onChange={handleChange}>
          <RadioInput
            name="side"
            value="w"
            checked={side === 'w'}
            label="White"
          />
          <RadioInput
            name="side"
            value="b"
            checked={side === 'b'}
            label="Black"
          />
          <RadioInput
            name="side"
            value="random"
            checked={side === 'random'}
            label="Random"
          />
        </div>
      </div>
    </>
  );
};

export default AiSettings;
