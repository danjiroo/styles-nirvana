/* eslint-disable no-unused-vars */
import React from 'react'

enum IconColorEnum {
  inherit,
  primary,
  secondary,
  success,
  warning,
  danger,
}

enum IconSizeEnum {
  sm,
  md,
  lg,
  xl,
}

export interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
  iconName?: string
  color?: keyof typeof IconColorEnum
  size?: keyof typeof IconSizeEnum
}
