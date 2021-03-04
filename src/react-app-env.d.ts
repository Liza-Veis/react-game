/// <reference types="react-scripts" />

declare module 'stockfish';

declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module '*.wav' {
  const src: string;
  export default src;
}
