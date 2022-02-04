import React from 'react'
import cn from 'classnames'

import { WithClassNames } from './types'

const Body: React.FC<WithClassNames> = (props) => {
  const { className, children, ...other } = props

  return (
    <tbody className={cn('tbody', className)} {...other}>
      {children}
    </tbody>
  )
}

export default Body
