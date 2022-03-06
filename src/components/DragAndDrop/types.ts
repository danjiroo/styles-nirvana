/* eslint-disable @typescript-eslint/no-explicit-any */
import { Node, Connection } from 'react-flow-renderer'
import { QuestionProps } from '../'

export type NodeTypes = 'default' | 'input' | 'output' | 'special'

export interface DNDOption {
  id: string
  node_type: NodeTypes
  question: QuestionProps
  component: (props: Record<string, unknown>) => JSX.Element
}

export interface ReactFlowProps {
  type: 'default' | 'reactflow'
  dndOptions?: DNDOption[]
}

export interface OptionProps {
  id: string
  node_type: NodeTypes
}

export interface StyledDropboxProps {
  dragStart: boolean
}

export interface ExtendedDataNode extends QuestionProps {
  label?: JSX.Element
  isValidConnection?: (connection: Connection) => boolean
}
export interface QuestionNodes extends Node {
  question_id: string
  data: ExtendedDataNode
  animated?: boolean
  // data: Pick<Node, 'data'>['data'] & QuestionProps
}
