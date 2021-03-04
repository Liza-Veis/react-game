export type TColor = 'w' | 'b';

export type TView = 'fixed' | 'auto-rotate';

export type TMode = 'two-players' | 'with-AI';

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

export type TBoard = (TPiece | null)[];
