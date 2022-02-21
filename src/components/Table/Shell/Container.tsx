import React from 'react'
import cn from 'classnames'

import { WithClassNames } from './types'

const Container: React.FC<WithClassNames> = (props) => {
  const { className, children, ...other } = props

  return (
    <div className={cn('container', className)} {...other}>
      {children}
    </div>
  )
}

export default Container
