/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlobalColors } from '../'

export interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'color'>,
    GlobalColors {
  /**
   * Checkbox text / label
   */
  label?: string
  indeterminate?: boolean
  checked?: boolean
}
