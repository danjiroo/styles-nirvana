import React from 'react'

import { GlobalProps } from '../'

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    GlobalProps {
  /**
   * Badge text
   */
  label?: string
  /**
   * Is badge closeable? A close icon will be shown once badge is hovered.
   */
  closeable?: boolean
  /**
   * Custom action when clicking the badge
   */
  onClick?: () => void
}
