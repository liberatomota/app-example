export type Grid = string[][];

export type GridState = {
    char: string | null;
    charGrid: Grid;
    code: number | null;
    randomStarted: boolean;
  };