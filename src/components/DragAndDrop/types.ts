export type NodeTypes = 'default' | 'input' | 'output'

export interface DNDOption {
  id: string
  node_type: NodeTypes
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
