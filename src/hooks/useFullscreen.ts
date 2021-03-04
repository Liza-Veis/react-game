import React, { useLayoutEffect, useState } from 'react';

const useFullscreen = (
  elRef: React.RefObject<HTMLElement>
): [boolean, () => void] => {
  const [isFullscreen, setIsFullscreen] = useState(
    document.fullscreenElement !== null
  );

  const setFullscreen = () => {
    if (elRef.current === null) return;
    if (!isFullscreen) {
      elRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(document.fullscreenElement !== null));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  useLayoutEffect(() => {
    document.onfullscreenchange = () => {
      setIsFullscreen(document.fullscreenElement !== null);

      return () => {
        document.onfullscreenchange = null;
      };
    };
  });

  return [isFullscreen, setFullscreen];
};

export default useFullscreen;
