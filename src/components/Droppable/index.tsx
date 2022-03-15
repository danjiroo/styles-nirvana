import React from 'react'
import { useDrop } from 'react-dnd'

import { StyledDroppable } from './styles'
import { DroppableProps } from './types'

const Droppable: React.FC<DroppableProps> = ({
  children,
  dndEntity = 'sample',
  getDroppedItems,
}) => {
  const [collectedProps, dropRef] = useDrop(() => ({
    accept: dndEntity,
    drop: (item: Record<string, unknown>) => getDroppedItems(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const { canDrop, isOver } = collectedProps

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
