import React from 'react'

import { Button } from '../'

import { StyledBadge } from './styles'
import { BadgeProps } from './types'

const Badge: React.FC<BadgeProps> = (props) => {
  const { label = 'P', children, closable = false, onClick } = props

  return (
    <StyledBadge {...props}>
      <span>{label || children}</span>

      {!!closable && (
        <Button onClick={onClick} label='' iconRight='close-circle' />
      )}
    </StyledBadge>
  )
}

export default Badge
