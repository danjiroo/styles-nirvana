/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react'
import ReactFlow, {
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer'

import { StyledDropbox } from './styles'
import { ReactFlowProps } from '../../types'

const initialElements = [
  {
    id: 'headingSample',
    type: 'input',
    data: { label: <h3>Survey React Flow Spike</h3> },
    position: { x: 250, y: 5 },
  },
]

// still in progress with this, for multiple questions (repeated questions)
let id = 0
const getId = () => `dndnode_${id++}`

const Dropbox: React.FC<ReactFlowProps> = ({ dndOptions }) => {
  const reactFlowWrapper = useRef<any>(null)
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const [elements, setElements] = useState<any>(initialElements)

  const onConnect = (params: any) =>
    setElements((els: any) => addEdge(params, els))

  const onElementsRemove = (elementsToRemove: any) =>
    setElements((els: any) => removeElements(elementsToRemove, els))

  const onLoad = (_reactFlowInstance: any) =>
    setReactFlowInstance(_reactFlowInstance)

  const onDragOver = (event: any) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  const onDrop = (event: any) => {
    event.preventDefault()

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
    const draggedId = event.dataTransfer.getData('application/reactflow')
    const splitType = draggedId.split(':')
    const [type, nodeId] = splitType ?? []

    const selectedOption = dndOptions?.find((opt) => opt.id === nodeId)

    const OptionChildComponent: any = selectedOption?.component

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    })
    const newNode = {
      id: getId(),
      type,
      position,
      data: {
        label: <OptionChildComponent />,
      },
    }

    setElements((es: any) => es.concat(newNode))
  }

  return (
    <StyledDropbox ref={reactFlowWrapper}>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        onLoad={onLoad}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Controls />
      </ReactFlow>
    </StyledDropbox>
  )
}

export default Dropbox
