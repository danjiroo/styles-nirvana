import { ReactChild, ReactChildren } from 'react'

export interface ContainerProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactChild | ReactChildren | JSX.Element[] | JSX.Element
}

import { ThemeProvider } from '../../themes'

interface Sizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export interface GetContainerStyles extends ThemeProvider {
  size: keyof Sizes
}
