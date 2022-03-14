import React from 'react'
import { useDrag } from 'react-dnd'

import { StyledDraggable } from './styles'
import { DraggableProps } from './types'

const Draggable: React.FC<DraggableProps> = ({ children }) => {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: 'card',
    item: {
      text: 'sample',
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }))

  return (
    <StyledDraggable ref={dragRef} opacity={opacity}>
      {children}
    </StyledDraggable>
  )
}

export default Draggable
