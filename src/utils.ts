export const getXY = (idx: number) => {
  const x = idx % 8;
  const y = Math.abs(Math.floor(idx / 8) - 7);
  return { x, y };
};

export const isDarkSquare = (idx: number) => {
  const { x, y } = getXY(idx);
  return (x + y) % 2 === 1;
};

export const getPosition = (idx: number) => {
  const { x, y } = getXY(idx);
  const file = 'abcdefgh'[x];
  return `${file}${y + 1}`;
};
