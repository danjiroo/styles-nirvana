import React from 'react'
import cn from 'classnames'

import { WithClassNames } from './types'

const Footer: React.FC<WithClassNames> = (props) => {
  const { className, children, ...other } = props

  return (
    <div className={cn('footer', className)} {...other}>
      {children}
    </div>
  )
}

export default Footer
