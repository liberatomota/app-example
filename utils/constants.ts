export const GRID_SIZE: number = 10;

export const GRID: string[][] = Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => ""
    )
);