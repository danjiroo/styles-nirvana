import React from 'react'
import cn from 'classnames'

import { WithClassNames } from './types'

const Cell: React.FC<WithClassNames> = (props) => {
  const { className, children, ...other } = props

  return (
    <td className={cn('td', className)} {...other}>
      {children}
    </td>
  )
}

export default Cell
