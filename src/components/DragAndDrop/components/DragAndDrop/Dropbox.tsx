/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react'
import ReactFlow, {
  addEdge,
  removeElements,
  Controls,
  Background,
} from 'react-flow-renderer'

import { StyledDropbox, StyledInitialElement } from './styles'
import { ReactFlowProps } from '../../types'

const initialElements = [
  {
    id: 'headingSample',
    type: 'output',
    data: {
      label: (
        <StyledInitialElement>
          <h2>Survey Sample</h2>
        </StyledInitialElement>
      ),
    },
    position: { x: 250, y: 250 },
  },
]

// still in progress with this, for multiple questions (repeated questions)
let id = 0
const getId = () => `dndnode_${id++}`

const Dropbox: React.FC<Pick<ReactFlowProps, 'dndOptions'>> = ({
  dndOptions,
}) => {
  const reactFlowWrapper = useRef<any>(null)
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const [elements, setElements] = useState<any>([])
  const [dragStart, setDragStart] = useState(false)

  const onConnect = (params: any) =>
    setElements((els: any) => addEdge(params, els))

  const onElementsRemove = (elementsToRemove: any) =>
    setElements((els: any) => removeElements(elementsToRemove, els))

  const onLoad = (_reactFlowInstance: any) =>
    setReactFlowInstance(_reactFlowInstance)

  const onDragOver = (event: any) => {
    event.preventDefault()
    setDragStart(true)
    event.dataTransfer.dropEffect = 'move'
  }

  const onDragLeave = (event: any) => {
    event.preventDefault()
    setDragStart(false)
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

    setDragStart(false)

    setElements((es: any) => es.concat(newNode))
  }

  return (
    <StyledDropbox ref={reactFlowWrapper} dragStart={dragStart}>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        onLoad={onLoad}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        {elements.length ? <Controls /> : null}
        <Background color='#aaa' gap={16} />
      </ReactFlow>
      {!elements.length && (
        <StyledInitialElement className='initial'>
          <h2>Drag &amp; Drop Questions</h2>
        </StyledInitialElement>
      )}
    </StyledDropbox>
  )
}

export default Dropbox
