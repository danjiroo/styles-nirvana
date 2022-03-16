/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DroppableProps {
  droppableId: string
  dndEntity: string
  getDroppedItems: (data: Record<string, unknown>) => void
  updateItems?: (o: any) => void
  items?: Record<string, any>
  position: string
  timeStart?: number
  timeEnd?: number
}

export interface StyledDroppableProps {
  isActive: boolean
  hasChildren: boolean
}
