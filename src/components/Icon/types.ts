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

export interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * Name of icon from the icon reference
   */
  iconName?: string
  /**
   * Icon color type
   */
  color?: keyof typeof IconColorEnum
  /**
   * Size of icon
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Is icon hoverable
   */
  hoverable?: boolean
}

export interface UseDynamicSVGImportOptions {
  onCompleted?: (
    iconName: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void
  onError?: (err: Error) => void
}
