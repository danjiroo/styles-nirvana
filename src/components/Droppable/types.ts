export interface DroppableProps {
  droppableId: string
  dndEntity: string
  getDroppedItems: (data: unknown) => void
}

export interface StyledDroppableProps {
  isActive: boolean
  hasChildren: boolean
}
