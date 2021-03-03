export const getXY = (
  idx: number,
  isReversed?: boolean
): { x: number; y: number } => {
  const x = !isReversed ? idx % 8 : Math.abs((idx % 8) - 7);
  const y = !isReversed
    ? Math.abs(Math.floor(idx / 8) - 7)
    : Math.floor(idx / 8);
  return { x, y };
};

export const isDarkSquare = (idx: number): boolean => {
  const { x, y } = getXY(idx);
  return (x + y) % 2 === 1;
};

export const getPosition = (idx: number, isReversed: boolean): string => {
  const { x, y } = getXY(idx, isReversed);
  const file = 'abcdefgh'[x];
  return `${file}${y + 1}`;
};

export const getRandomSide = (): 'w' | 'b' => {
  return 'wb'[Math.round(Math.random())] as 'w' | 'b';
};
