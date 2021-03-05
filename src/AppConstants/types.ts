export type TColor = 'w' | 'b';

export type TView = 'fixed' | 'auto-rotate';

export type TMode = 'two-players' | 'with-AI' | 'autoplay';

export type TSide = 'w' | 'b' | 'random';

export type TPendingPromotion = {
  from: string;
  to: string;
  color: string;
} | null;

export type TPromotion = {
  from: string;
  to: string;
  promotion: string;
};

export type TPiece = {
  color: TColor;
  type: string;
};

export type TStatisticsHeader = 'date' | 'mode' | 'side' | 'winner';

export type TStatisticsField = {
  date: string;
  mode: TMode;
  side: TColor | '-';
  winner: TColor | '-';
};

export type TStatistics = TStatisticsField[];

export type TBoard = (TPiece | null)[];
