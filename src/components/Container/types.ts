import { ReactChild, ReactChildren } from 'react'

export interface ContainerProps {
  /**
   * Wrap any comment with Container component to change it's width
   * In this example, the Input component is wrap inside the Container component
   * When you give the the following props:
      - xs
      - sm
      - md
      - lg
      - xl
  * The width of the Input will update depending on the size prop you give it. 
  * If you don't give it a size prop the width of the component wil be 100%.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
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
  size?: keyof Sizes
}
