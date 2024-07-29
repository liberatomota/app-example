"use client"

import { ReactElement } from "react"
import Actions from "@/components/grid/actions"
import Matrix from "@/components/grid/matrix"
import Code from "@/components/grid/code"

const Grid = (): ReactElement => {

  return (
    <div className="p-8">
        <Actions />
        <Matrix />
        <Code /> 
        
    </div>
  )
}

export default Grid
