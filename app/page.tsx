"use client"

import { ReactElement, useRef } from "react"
import Actions from "@/components/grid/actions"
import Matrix from "@/components/grid/matrix"
import Code from "@/components/grid/code"

const Grid = (): ReactElement  => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <div className="p-8">
        <Actions />
        <Matrix />
        <Code /> 
        
    </div>
  )
}

export default Grid
