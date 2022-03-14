/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from 'react'
import ReactFlow, {
  addEdge,
  updateEdge,
  isEdge,
  removeElements,
  Controls,
  Background,
  useZoomPanHelper,
  Connection,
} from 'react-flow-renderer'
import { v4 } from 'uuid'

import { StyledDropbox, StyledInitialElement } from './styles'
import { QuestionNodes, ReactFlowProps } from '../../types'

import { Button } from '../../../'

import CustomNodeComponent from './CustomNode'
import CustomEdgeComponent from './CustomEdge'

const nodeTypes = {
  special: CustomNodeComponent,
}

const edgeTypes = {
  buttonedge: CustomEdgeComponent,
}
export interface DropboxProps extends Pick<ReactFlowProps, 'dndOptions'> {
  className?: string
  initialNodes?: QuestionNodes[]
  handleAddNode: (node: QuestionNodes) => void
  handleRemoveNodes: (nodes: QuestionNodes[]) => void
  handleSave?: () => void
}

const initialElements: QuestionNodes[] = [
  {
    id: '1',
    question_id: '1',
    type: 'special',
    data: {
      id: '1',
      name: 'Question 1',
      question: 'Sample?',
      type: 'choice',
      choices: ['A', 'B', 'C', 'D'],
    },
    position: { x: 250, y: 250 },
  },
  {
    id: '2',
    question_id: '2',
    type: 'special',
    data: {
      id: '2',
      name: 'Question 2',
      question: 'Sample 2?',
      type: 'choice',
      choices: ['A', 'B', 'C', 'D'],
    },
    position: { x: 0, y: 0 },
  },
]

const Dropbox: React.FC<DropboxProps> = ({
  dndOptions,
  className,
  initialNodes = [],
  handleAddNode = () => {},
  handleRemoveNodes = () => {},
  handleSave = () => {},
}) => {
  const reactFlowWrapper = useRef<any>(null)
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const [elements, setElements] = useState<any>(initialNodes)
  const [dragStart, setDragStart] = useState(false)

  useEffect(() => setElements(initialNodes), [initialNodes])

  // useEffect(() => {
  //   if (reactFlowInstance && elements.length > 1) {
  //     setTimeout(() => reactFlowInstance.fitView(), 0)
  //   }
  // }, [reactFlowInstance, elements])

  const onEdgeUpdate = (oldEdge: any, newConnection: any) => {
    handleAddNode({
      ...oldEdge,
      ...newConnection,
    })

    setElements((els: any) => updateEdge(oldEdge, newConnection, els))
  }

  const onConnect = (params: any) => {
    const newEdge = {
      ...params,
      // animated: true,
      // type: 'smoothstep',
      arrowHeadType: 'arrowclosed',
      className: 'reactflow-connector',
      type: 'buttonedge',
      data: {
        rules: {},
        onEdgeUpdate,
      },
      id: v4(),
    }

    handleAddNode(newEdge)
    setElements((els: any) => addEdge(newEdge, els))
  }

  const onElementsRemove = (elementsToRemove: any) => {
    handleRemoveNodes(elementsToRemove)
    setElements((els: any) => removeElements(elementsToRemove, els))
  }

  const onLoad = (_reactFlowInstance: any) => {
    setReactFlowInstance(_reactFlowInstance)
  }

  const onDragOver = (event: any) => {
    event.preventDefault()
    setDragStart(true)
    event.dataTransfer.dropEffect = 'move'
  }

  const onDragLeave = (event: any) => {
    event.preventDefault()
    setDragStart(false)
  }

  const onNodeDragStop = (event: any, node: any) => {
    event.preventDefault()
    const { label, ...restNode } = node

    handleAddNode(restNode)

    // if (reactFlowInstance && elements.length > 1) {
    //   setTimeout(() => reactFlowInstance.fitView(), 0)
    // }
  }

  const isValidConnection = (connection: Connection) => true

  const onDrop = (event: any) => {
    event.preventDefault()

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
    const draggedId = event.dataTransfer.getData('application/reactflow')
    const splitType = draggedId.split(':')
    const [type, nodeId] = splitType ?? []

    const selectedOption = dndOptions?.find((opt) => opt.id === nodeId)

    const { id, question, component } = selectedOption ?? {}
    const OptionChildComponent: any = component

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    })

    const newNode = {
      id: v4(),
      question_id: id!,
      type,
      position,
      data: {
        ...question!,
        label: <OptionChildComponent />,
        isValidConnection,
      },
    }

    setDragStart(false)

    handleAddNode(newNode)

    setElements((es: any) => es.concat(newNode))
  }

  return (
    <StyledDropbox
      ref={reactFlowWrapper}
      dragStart={dragStart}
      className={className}
    >
      <ReactFlow
        deleteKeyCode={46}
        edgeTypes={edgeTypes}
        className='reactflow-div validationflow'
        elements={elements}
        onConnect={onConnect}
        onEdgeUpdate={onEdgeUpdate}
        onElementsRemove={onElementsRemove}
        onLoad={onLoad}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
      >
        {elements.length ? <Controls /> : null}
        {elements.length ? (
          <div className='save-btn-div'>
            <Button label='Save' onClick={handleSave} />
          </div>
        ) : null}
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
