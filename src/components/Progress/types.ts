import { GlobalColors, GSizes } from '../'

export interface ProgressProps extends GlobalColors {
  /**
   * Progress percentage
   */
  progress: number
  /**
   * Progress size
   */
  size: GSizes
}
