export type GColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
export type GColorWeights = '50' | '100' | '200' | 'DEFAULT' | '300' | '400'
export type GSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type GLayout = 'solid' | 'outline' | 'dashed' | 'dotted' | 'double'

export interface GlobalColors {
  /**
   * Color of component
   */
  color?: GColors
  /**
   * Weight of component color
   */
  colorWeight?: GColorWeights
}

export interface GlobalSizes {
  /**
   * Size of component
   */
  size?: GSizes
}

export interface GlobalBorderLayout {
  /**
   * Border style or layout of component
   */
  layout?: GLayout
}

export type GlobalProps = GlobalColors & GlobalSizes & GlobalBorderLayout

// Other component type definitions
export * from './Badge/types'
export * from './Button/types'
export * from './Card/types'
export * from './Checkbox/types'
export * from './Container/types'
export * from './DragAndDrop/types'
export * from './Draggable/types'
export * from './Droppable/types'
export * from './Form/types'
export * from './Icon/types'
export * from './Image/types'
export * from './Input/types'
export * from './List/types'
export * from './Logo/types'
export * from './Menu/types'
export * from './Navigation/types'
export * from './Progress/types'
export * from './Question/types'
export * from './RaySpinner/types'
export * from './Search/types'
export * from './Select/types'
export * from './Spinner/types'
export * from './Table/types'
export * from './Tooltip/types'
