import React, { ReactElement } from 'react'
import { useGridData } from '@/contexts/gridData';


const Code = (): ReactElement => {
    const { state } = useGridData();

    return (
        <div className="flex flex-col items-center justify-center space-y-4 bg-white p-8">
            {/* Live Indicator Section */}
            <div className="flex items-center space-x-2">
                {state.randomStarted ? <><span className="block h-3 w-3 bg-red-500 rounded-full"></span>
                    <span className="text-sm font-semibold text-gray-700">LIVE</span></> : null}
            </div>

            {/* Code Display Section */}
            <div className="flex items-center justify-center border border-gray-400 rounded-lg px-8 py-4">
                <span className="text-lg font-medium text-gray-900 w-150">YOUR CODE: {state.code}</span>
            </div>
        </div>
    )
}

export default Code