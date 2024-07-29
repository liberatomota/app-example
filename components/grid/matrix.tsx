import React, { ReactElement } from 'react'
import { useGridData } from '@/contexts/gridData';
import { GRID_SIZE } from '@/utils/constants';

const setCellBorders = (row: number, col: number) => {
    const adicionalClasses: Array<string> = [];
    if (row === 0) {
        adicionalClasses.push("border-t-0");
    }
    if (col >= (GRID_SIZE - 1)) {
        adicionalClasses.push("border-r-0");
    }
    return adicionalClasses.join(" ");
}

const Matrix = (): ReactElement => {
    const { state } = useGridData();
    return (
        <div className="grid grid-cols-10 rounded-lg overflow-hidden border border-gray-400">
            {state?.charGrid && state.charGrid.map((row, rowIndex) => (
                row.map((col, colIndex) => (
                    <div key={`cell-${rowIndex}-${colIndex}`} className={`h-10 border border-gray-400 border-b-0 border-l-0 ${setCellBorders(rowIndex, colIndex)}`}>
                        <div className='h-10 flex items-center justify-center '>{`${state.charGrid[rowIndex][colIndex]}`}</div>
                    </div>
                )
                )
            ))}
        </div>
    )
}

export default Matrix