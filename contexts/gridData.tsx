"use client"

import React, { createContext, useContext, useState, ReactNode, FunctionComponent, ReactElement, useEffect, useRef, useCallback } from 'react';
import { GridState } from '@/types/grid';
import { GRID } from '@/utils/constants';
import { runGenerate } from "@/lib/randomGenerator";

interface GridDataType {
  state: GridState;
  updateState: (newState: GridState) => void;
}

const GridData = createContext<GridDataType | undefined>(undefined);

export const GridDataProvider: FunctionComponent<{ children: ReactNode }> = ({ children }): ReactElement => {
  const initialState: GridState = {
    char: '',
    charGrid: GRID,
    code: null,
    randomStarted: false
  };
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const [state, setState] = useState<GridState>(initialState);

  const updateState = useCallback((newState: GridState) => {
    setState(newState);
  },[]);

  const runRandom = useCallback(async () => {
    const { charGrid, code } = await runGenerate(state?.char?.toUpperCase());
    updateState({...state, charGrid, code, randomStarted: true });
},[state, updateState])

  useEffect(() => {
  if (state.randomStarted) {
      intervalRef.current = setInterval(() => {
          runRandom();
      }, 2000)
  }
  return () => {
      if (intervalRef.current) {
          console.log("Clear interval on effect exit!");
          clearInterval(intervalRef.current);
      }
  }
  }, [state.randomStarted, runRandom]);

  // Return the context provider with children inside it
  return (
    <GridData.Provider value={{ state, updateState }}>
      {children}
    </GridData.Provider>
  );
};

export const useGridData = () => {
  const context = useContext(GridData);
  if (context === undefined) {
    throw new Error('useGridData must be used within a GridDataProvider');
  }
  return context;
};

export default GridData;
