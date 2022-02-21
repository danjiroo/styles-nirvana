import React from 'react'
import cn from 'classnames'

import { WithClassNames } from './types'

interface CellProps extends WithClassNames {
  header?: boolean
}

const Cell: React.FC<CellProps> = (props) => {
  const { className, children, header = false, ...other } = props

  return header ? (
    <th className={cn('th', className)} {...other}>
      {children}
    </th>
  ) : (
    <td className={cn('td', className)} {...other}>
      {children}
    </td>
  )
}

export default Cell
