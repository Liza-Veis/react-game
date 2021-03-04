import React from 'react';

type Props = {
  isDark: boolean;
  children: React.ReactNode;
  handleClick: () => void;
};

const Square: React.FC<Props> = ({ children, isDark, handleClick }: Props) => {
  const className = `square ${isDark && 'square_dark'}`;

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Square;
