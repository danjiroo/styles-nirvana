/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer'

import initialElements from './initialElements'

// ! Types here are temporary, since this Component is just an example
const onLoad = (reactFlowInstance: any) => {
  console.log('flow loaded:', reactFlowInstance)
  reactFlowInstance.fitView()
}

const OverviewFlow: React.FC = () => {
  const [elements, setElements] = useState<any>(initialElements)
  const onElementsRemove = (elementsToRemove: any) =>
    setElements((els: any) => removeElements(elementsToRemove, els))
  const onConnect = (params: any) =>
    setElements((els: any) => addEdge(params, els))

  return (
    <div>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
        style={{ height: '100vh' }}
      >
        <MiniMap
          nodeStrokeColor={(n: any) => {
            if (n.style?.background) return n.style.background
            if (n.type === 'input') return '#0041d0'
            if (n.type === 'output') return '#ff0072'
            if (n.type === 'default') return '#1a192b'
            return '#eee'
          }}
          nodeColor={(n: any) => {
            if (n.style?.background) return n.style.background
            return '#fff'
          }}
          nodeBorderRadius={2}
        />
        <Controls />
        <Background color='#aaa' gap={16} />
      </ReactFlow>
    </div>
  )
}

export default OverviewFlow
