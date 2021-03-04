import React, { useState } from 'react';

type Props = {
  fullscreen: [boolean, () => void];
};

const FullscreenSettings: React.FC<Props> = ({ fullscreen }: Props) => {
  const [isFullscreen, setIsFullscreen] = fullscreen;
  const [isChecked, setIsChecked] = useState(isFullscreen);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (isFullscreen === isChecked) {
      setIsFullscreen();
    }
  };

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div className="settings__item">
      <h3 className="settings__title">Fullscreen</h3>
      <div className="settings__box">
        <label htmlFor="fullscreen">
          <input
            type="radio"
            id="fullscreen"
            onClick={handleClick}
            checked={isChecked}
          />
          Enable
        </label>
      </div>
    </div>
  );
};

export default FullscreenSettings;
