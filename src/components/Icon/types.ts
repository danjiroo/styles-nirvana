import React from 'react'

enum IconColorEnum {
  primary,
  secondary,
  success,
  warning,
  danger,
  light,
  dark,
}

// enum IconSizeEnum {
//   xs,
//   sm,
//   base,
//   lg,
//   xl,
// }

export interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
  iconName?: string
  color?: keyof typeof IconColorEnum
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}
