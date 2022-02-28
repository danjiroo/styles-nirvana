import React from 'react'
import { GlobalProps } from '../'

export interface List {
  id: string
  component: React.ReactNode
}

export interface ListProps extends Pick<GlobalProps, 'size'> {
  /**
   * Option text alignment
   */
  textAlignment?: 'center' | 'left' | 'right'
  /**
   * Position of options
   */
  position?: 'center' | 'left' | 'right'
  /**
   * List option components
   */
  list?: List[]
  /**
   * Has Pointer?
   */
  hasPointer?: boolean
  /**
   * Rounded edges?
   */
  rounded?: boolean
  /**
   * Has box shadow, shown as a dropdown
   */
  asDropDown?: boolean
  /**
   * Is list hoverable?
   */
  hoverable?: boolean
  /**
   * Is list clickable?
   */
  clickable?: boolean
}
