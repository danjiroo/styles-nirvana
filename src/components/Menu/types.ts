import { ReactChild, ReactChildren } from 'react'

export interface MenuProps {
  children?: ReactChild | ReactChildren | JSX.Element[] | JSX.Element
  align: 'left' | 'right'
}
