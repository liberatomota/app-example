import { getRandomLetters } from "@/actions/randomLetters";
import { GridState, Grid } from '@/types/grid'

export const runGenerate = async (char : string | undefined ): Promise<{ charGrid: Grid, code: number }> => {
    const charGrid = await getRandomLetters(char?.toUpperCase())
    console.log("response from serve to getRandomLetters function call:", charGrid)
    // updateState({ ...state, charGrid });


    const response = await fetch('/api/currentSeconds');
    const { seconds } = await response.json()as { seconds: number[]};
    console.log("response from API to currentSeconds endpoint:", seconds)

    const char1: string = charGrid[seconds[0]][seconds[1]];
    const char2: string = charGrid[seconds[1]][seconds[0]];

    let count1: number = 0;
    let count2: number = 0;

    // Count occurrences in the grid
    charGrid.forEach(row => {
        row.forEach(cell => {
            if (cell === char1) count1++;
            if (cell === char2) count2++;
        });
    });

    console.log("char1", char1, "count1", count1)
    console.log("char2", char2, "count2", count2)

    // Adjust the counts if necessary
    const adjustCount = (count: number) => {
        if (count <= 9) return count; // If count is 9 or less, return it directly.
        for (let i = 2; i < count; i++) {
            if (count / i <= 9) return count / i; // Return the adjusted count as soon as it's 9 or less.
        }
        return count;
    };

    const finalCount1: number = adjustCount(count1);
    const finalCount2: number = adjustCount(count2);

    const code = parseInt(`${Math.floor(finalCount1)}${Math.floor(finalCount2)}`)

    console.log("code", code)
    return { charGrid, code };
}