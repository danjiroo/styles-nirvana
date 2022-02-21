import React from 'react'
import cn from 'classnames'

import { WithClassNames } from './types'

const Row: React.FC<WithClassNames> = (props) => {
  const { className, children, ...other } = props

  return (
    <tr className={cn('tr', className)} {...other}>
      {children}
    </tr>
  )
}

export default Row
