/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { GlobalProps } from '../'

import { iconArray } from './IconList'

type ArrayType = typeof iconArray[number]

export interface IconProps extends GlobalProps {
  /**
   * Name of icon from the icon reference
   */
  iconName?: ArrayType
  /**
   * Is icon hoverable
   */
  hoverable?: boolean
  /**
   * Is icon clickable
   */
  clickable?: boolean
  /**
   * Is icon disabled
   */
  disabled?: boolean
  /**
   * On Click Action
   */
  onClick?: (data?: any) => void
  /**
   * Has a dropdown menu when clicked
   */
  hasDropdown?: boolean
  /**
   * Dropdown menu component
   */
  dropdown?: React.ReactNode
  /**
   * Custom classname
   */
  className?: string
}
