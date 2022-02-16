import React from 'react'

import { Button } from '../'

import { StyledCard } from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  children,
  zoomOnHover = false,
  clickable = false,
  closeable = false,
  handleClick,
  handleClose,
  ...rest
}) => (
  <StyledCard
    {...rest}
    zoomOnHover={zoomOnHover}
    onClick={() => (clickable ? handleClick?.() : {})}
  >
    {closeable && (
      <Button
        onClick={handleClose}
        className='close_btn'
        icon='x-circle'
        layout='outline'
      />
    )}
    {children}
  </StyledCard>
)

export default Card
