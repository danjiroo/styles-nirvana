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
    closeable = false,
    onClick,
  } = props

  return (
    <StyledBadge {...props} onClick={() => {}}>
      <span>{label || children}</span>

      {!!closeable && (
        <Button
          onClick={onClick}
          className='close_btn'
          icon='x-circle'
          btnColor={type}
          size='xs'
        />
      )}
    </StyledBadge>
  )
}

export default Badge
