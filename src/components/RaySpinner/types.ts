export interface RaySpinnerProps {
  className?: string
  /**
   * Color of rays
   */
  color?: string
  /**
   * Controls the dimension of the spinner
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Controls the height of the ray
   */
  rayHeight?: number
  /**
   * Controls the width of the ray
   */
  rayWidth?: number
  /**
   * Controls the roundness of the ray. 50 are full-circles, 0 are sharp corners
   */
  rayRadius?: number
  /**
   * Controls the width of the ray
   */
  inButton?: boolean
}
