import React from 'react'
import { useDrag } from 'react-dnd'

import { StyledDraggable } from './styles'
import { DraggableProps } from './types'

const Draggable: React.FC<DraggableProps> = ({
  children,
  item,
  dndEntity = 'sample',
}) => {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: dndEntity,
    item: item ?? {},
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
