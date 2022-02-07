/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react'
import cn from 'classnames'

import { IconProps } from './types'

import { StyledIconDiv } from './styles'

const Icon: React.FC<IconProps> = (props) => {
  const {
    className,
    color = 'primary',
    iconName,
    size = 'base',
    ...other
  } = props

  const cls = cn(
    {
      [`icon-${iconName}`]: !!iconName,
    },
    `icon--color-${color}`,
    `icon--size-${size}`,
    className
  )

  return (
    <StyledIconDiv size={size} color={color}>
      <i className={cls} data-icon={iconName} {...other} />
    </StyledIconDiv>
  )
}

export default Icon
