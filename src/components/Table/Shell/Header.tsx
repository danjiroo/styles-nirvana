import React from 'react'
import cn from 'classnames'

import { WithClassNames } from './types'

const Header: React.FC<WithClassNames> = (props) => {
  const { className, children, ...other } = props

  return (
    <thead className={cn('thead', className)} {...other}>
      {children}
    </thead>
  )
}

export default Header
