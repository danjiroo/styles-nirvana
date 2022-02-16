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
  iconName?: string
  color?: keyof typeof IconColorEnum
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  stroke?: string
}

export interface UseDynamicSVGImportOptions {
  onCompleted?: (
    iconName: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void
  onError?: (err: Error) => void
}
