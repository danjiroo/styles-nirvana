/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react'

import { Button } from '../'

import { StyledBadge } from './styles'
import { BadgeProps } from './types'

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    label = 'P',
    children,
    closable = false,
    onClick,
    size,
    ...rest
  } = props
  return (
    <StyledBadge {...props}>
      <span>{label || children}</span>

      {/* {!!closable && (
        <Button onClick={onClick} {...rest} iconRight='close-circle' />
      )} */}
    </StyledBadge>
  )
}

export default Badge
