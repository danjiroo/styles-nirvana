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
