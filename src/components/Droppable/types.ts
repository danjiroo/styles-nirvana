export interface DroppableProps {
  droppableId: string
  dndEntity: string
  getDroppedItems: (data: Record<string, unknown>) => void
}

export interface StyledDroppableProps {
  isActive: boolean
  hasChildren: boolean
}
