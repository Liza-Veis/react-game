import React from 'react';

type Props = {
  isDark: boolean;
  children: React.ReactNode;
};

const Square: React.FC<Props> = ({ children, isDark }: Props) => {
  const className = `square ${isDark && 'square_dark'}`;

  return <div className={className}>{children}</div>;
};

export default Square;
