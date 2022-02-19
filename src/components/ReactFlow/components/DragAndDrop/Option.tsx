import React, { DragEvent } from 'react'

import { OptionProps } from '../../types'

const onDragStart = (event: DragEvent, draggedId: string) => {
  event.dataTransfer.setData('application/reactflow', draggedId)
  event.dataTransfer.effectAllowed = 'move'
}

const Option: React.FC<OptionProps> = ({
  children,
  id,
  node_type = 'default',
}) => {
  console.log(children, 'x')
  return (
    <div className='react-flow-sidebar-options'>
      <div
        className={`react-flow__node-${node_type}`}
        onDragStart={(event: DragEvent) =>
          onDragStart?.(event, `${node_type}:${id}`)
        }
        draggable
      >
        {children}
      </div>
    </div>
  )
}

export default Option
