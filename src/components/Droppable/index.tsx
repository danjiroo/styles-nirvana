import React from 'react'
import { useDrop } from 'react-dnd'

import { StyledDroppable } from './styles'
import { DroppableProps } from './types'

const Droppable: React.FC<DroppableProps> = ({ children }) => {
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: 'card',
    drop: () => ({
      name: 'sample',
      allowedDropEffect: true,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver

  return (
    <StyledDroppable ref={dropRef} isActive={isActive} hasChildren={!!children}>
      <div>
        {children ? (
          children
        ) : (
          <span className='overlay-text'>
            {isActive ? 'Release to drop' : 'Drop something here'}
          </span>
        )}
      </div>
    </StyledDroppable>
  )
}

export default Droppable
