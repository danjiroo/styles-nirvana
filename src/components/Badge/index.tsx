/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { Button } from '../'

import { StyledBadge } from './styles'
import { BadgeProps } from './types'

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    label = 'P',
    children,
    type = 'primary',
    closable = false,
    onClick,
  } = props

  return (
    <StyledBadge {...props} onClick={() => {}}>
      <span>{label || children}</span>

      {!!closable && (
        <Button
          onClick={onClick}
          className='close_btn'
          icon='close-circle'
          btnColor={type}
        />
      )}
    </StyledBadge>
  )
}

export default Badge
