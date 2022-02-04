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
  xs,
  sm,
  base,
  lg,
  xl,
}

export interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
  iconName?: string
  color?: keyof typeof IconColorEnum | string
  size?: keyof typeof IconSizeEnum
}
