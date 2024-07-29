"use server";
import { GRID_SIZE } from "@/utils/constants";
import { Grid } from '@/types/grid'

export const getRandomLetters = (specialChar?: string): Grid => {

  const totalCells = GRID_SIZE * GRID_SIZE;
  const specialCharCount = specialChar ? Math.floor(totalCells * 0.2) : 0; // 20%

  let data: Grid;

  const getRandomLetter = (excludeChar: string) => {
    let randomChar: string;
    do {
      // 'A' in ASCII starts at 65
      randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } while (randomChar === excludeChar.toUpperCase());
    return randomChar;
  };

  if (specialChar) {

    data = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => getRandomLetter(specialChar))
    );

    // If a special character is provided, randomly assign it to 20% of the grid
    if (specialChar && /^[a-z]$/i.test(specialChar)) {
      let count = 0;
      const seenPositions = new Set<number>();
      while (count < specialCharCount) {
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        const pos = row * GRID_SIZE + col;
        if (!seenPositions.has(pos)) {
          seenPositions.add(pos);
          data[row][col] = specialChar.toUpperCase();
          count++;
        }
      }
    }


  } else {
    data = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => 
        String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      )
    );
  }

  // console.log(data);
  return data;
};
