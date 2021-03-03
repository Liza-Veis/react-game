import React from 'react';

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
    </>
  );
};

export default TwoPlayersSettings;
