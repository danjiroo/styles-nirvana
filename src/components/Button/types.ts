/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { MouseEvent } from 'react'

import { GlobalProps, GColorWeights } from '../'

import { IconNames } from '../Icon/IconList'

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>,
    GlobalProps {
  ref?: any
  /**
   * Button text
   */
  label?: string
  /**
   * Button Custom Hover Color Weight
   */
  hoverColorWeight?: GColorWeights
  /**
   * Button surface or edges
   */
  rounded?: boolean
  /**
   * Is button currently loading?
   */
  isLoading?: boolean
  /**
   * Shows a custom text when isLoading is true
   */
  loadingLabel?: string
  /**
   * Button is not clickable
   */
  isDisabled?: boolean
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconNames | string
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: string
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: string
  /**
   * Optional click handler
   */
  onClick?: (data: MouseEvent<HTMLButtonElement>) => void
  /**
   * Custom classname
   */
  className?: string
}
