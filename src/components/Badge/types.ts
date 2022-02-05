import React from 'react'
import { ThemeProvider } from '@themes/types'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ThemeProvider {
  /**
   * Badge text
   */
  label?: string
  /**
   * Is badge closable? A close icon will be shown once badge is hovered.
   */
  closable?: boolean
  /**
   * Size of the badge
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Color of the badge
   */
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  /**
   * Custom action when clicking the badge
   */
  onClick?: () => void
}
