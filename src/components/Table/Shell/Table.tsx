import React from 'react'
import cn from 'classnames'

import Body from './Body'
import Cell from './Cell'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import Row from './Row'

import { WithClassNames } from './types'

const Table: React.FC<WithClassNames> = (props) => {
  const { className, children, ...other } = props

  return (
    <table className={cn('table', className)} {...other}>
      {children}
    </table>
  )
}

export default Object.assign(Table, {
  Container,
  Header,
  Body,
  Row,
  Cell,
  Footer,
})
