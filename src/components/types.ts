export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
export type ColorWeights = '50' | '100' | '200' | 'DEFAULT' | '300' | '400'
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Layout = 'solid' | 'outline' | 'dashed' | 'dotted' | 'double'

export interface GlobalColors {
  /**
   * Color of component
   */
  color?: Colors
  /**
   * Weight of component color
   */
  colorWeight?: ColorWeights
}

export interface GlobalSizes {
  /**
   * Size of component
   */
  size?: Sizes
}

export interface GlobalBorderLayout {
  /**
   * Border style or layout of component
   */
  layout?: Layout
}

export type GlobalProps = GlobalColors & GlobalSizes & GlobalBorderLayout
