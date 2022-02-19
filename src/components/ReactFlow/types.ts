/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export type NodeTypes = 'default' | 'input' | 'output'

export interface ReactFlowOption {
  id: string
  node_type: NodeTypes
  component: React.ReactNode
}

export interface ReactFlowProps {
  dndOptions?: ReactFlowOption[]
}

export interface OptionProps {
  id: string
  node_type: NodeTypes
}
