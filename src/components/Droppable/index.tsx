/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { useDrop } from 'react-dnd'

import { StyledDroppable } from './styles'
import { DroppableProps } from './types'

const Droppable: React.FC<DroppableProps> = ({
  children,
  dndEntity = 'sample',
  position = '0px',
  timeStart = 0,
  getDroppedItems,
}) => {
  const [item, setItem] = React.useState<Record<string, any>>({})

  const [collectedProps, dropRef] = useDrop(() => ({
    accept: dndEntity,
    drop: (item: Record<string, unknown>) => {
      setItem({
        ...item,
        updatedDate: Date.now(),
      })

      return item
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  useEffect(() => {
    if (Object.keys(item ?? {})?.length) {
      getDroppedItems({
        ...item,
        leftPosition: position,
        timeStart,
      })
    }
  }, [item])

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
