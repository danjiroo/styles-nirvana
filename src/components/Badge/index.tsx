import React from 'react'

import { Button } from '../'

import { StyledBadge } from './styles'
import { BadgeProps } from './types'

const Badge: React.FC<BadgeProps> = (props) => {
  const { label = 'P', children, closable = false, onClick } = props

  return (
    <StyledBadge {...props}>
      <span>{label || children}</span>

      {!!closable && <Button icon='close-circle' onClick={onClick} />}
    </StyledBadge>
  )
}

export default Badge
