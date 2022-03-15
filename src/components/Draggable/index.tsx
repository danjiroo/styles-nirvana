import React from 'react'
import { useDrag } from 'react-dnd'

import { StyledDraggable } from './styles'
import { DraggableProps } from './types'

const Draggable: React.FC<DraggableProps> = ({
  children,
  dndEntity = 'sample',
}) => {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: dndEntity,
    item: {
      text: 'sample',
      bati: 'nawng',
      age: 99,
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
