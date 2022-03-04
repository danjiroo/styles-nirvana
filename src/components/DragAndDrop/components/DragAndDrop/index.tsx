import React from 'react'
import { ReactFlowProvider } from 'react-flow-renderer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Dropbox from './Dropbox'
import Sidebar from './Sidebar'

import { Draggable, Droppable } from '../../../'

import { StyledDnDContainer } from './styles'
import { ReactFlowProps } from '../../types'

const DragAndDrop: React.FC<ReactFlowProps> = (props) => {
  const { type = 'default', children } = props

  return (
    <StyledDnDContainer {...props}>
      {type === 'reactflow' && (
        <ReactFlowProvider>{children}</ReactFlowProvider>
      )}

      {type === 'default' && (
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      )}
    </StyledDnDContainer>
  )
}

export default Object.assign(DragAndDrop, {
  Provider: DragAndDrop,
  ReactFlowSidebar: Sidebar,
  ReactFlowDropbox: Dropbox,
  Draggable,
  Droppable,
})
