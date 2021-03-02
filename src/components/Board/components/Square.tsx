import React from 'react';

type Props = {
  isDark: boolean;
  children: React.ReactNode;
  moveTo: () => void;
};

const Square: React.FC<Props> = ({ children, isDark, moveTo }: Props) => {
  const className = `square ${isDark && 'square_dark'}`;

  return (
    <div className={className} onClick={moveTo}>
      {children}
    </div>
  );
};

export default Square;
