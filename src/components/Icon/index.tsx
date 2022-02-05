import React from 'react'
import cn from 'classnames'

import { IconProps } from './types'

// import { StyledIcon } from './styles'
// import './assets/styles.css'

const Icon: React.FC<IconProps> = (props) => {
  const {
    className,
    color = 'secondary',
    iconName,
    size = 'sm',
    ...other
  } = props

  const cls = cn(
    {
      [`icon-${iconName}`]: !!iconName,
    },
    `icon--color-${color}`,
    `icon--size-${size}`,
    // custom or override
    className
  )

  return <i className={cls} {...other} />
}

export default Icon
