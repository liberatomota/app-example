import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import Image from "next/image";
import { runGenerate } from "@/lib/randomGenerator";
import { useGridData } from '@/contexts/gridData';

const Actions = (): ReactElement => {
    const { state, updateState } = useGridData();
    const [charDisabled, setCharDisabled] = useState<boolean>(false);
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

    const handleCharInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let char = '';

        if (value) {
            const inputChar = value.toUpperCase();
            if (/^[A-Z]$/.test(inputChar) && !charDisabled) {
                char = inputChar
            }
        }

        updateState({ ...state, char });
        setCharDisabled(true);
    };

    const handleRandomButtonClick = (): void => {
        updateState({ ...state, randomStarted: true });
        runRandom();
        setBtnDisabled(true);
        
    }

    const runRandom = async () => {
        const { charGrid, code } = await runGenerate(state?.char?.toUpperCase());
        updateState({...state, charGrid, code, randomStarted: true });
    }

    useEffect(() => {
        if (charDisabled) {
            const timeout = setTimeout(() => {
                setCharDisabled(false);
            }, 4000);
            return () => clearTimeout(timeout);
        }
    }, [charDisabled]);

    return (
        <div className="grid grid-cols-3 gap-4 pb-4 ">
            <div className="flex flex-col h-20">
                <label htmlFor="character" className="block text-sm font-medium text-gray-700">
                    Character
                </label>
                <input
                    type="text"
                    id="character"
                    value={state?.char || ''}
                    onChange={handleCharInputChange}
                    disabled={charDisabled}
                    maxLength={1}
                    placeholder="Character"
                    className="mt-1 block w-[15rem] border border-gray-400 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex items-center justify-center h-20">
                <Image src="/clock.svg" width={100} height={100} alt="Descriptive Alt Text" className="max-w-full max-h-full" />
            </div>

            <div className="flex flex-col items-end h-20">
                <div className="h-4 mb-2"></div>
                <button 
                    className=" w-[15rem] px-4 py-2 bg-gray-400 text-white rounded-md"
                    onClick={() => handleRandomButtonClick()}
                    disabled={btnDisabled}
                >
                    Generate 2D Grid
                </button>
            </div>
        </div>

    );
}

export default Actions;
