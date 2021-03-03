import React from 'react';

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
    </>
  );
};

export default AiSettings;
