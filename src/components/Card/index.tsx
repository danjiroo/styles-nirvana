import React from 'react'

import { StyledCard } from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  children,
  zoomOnHover = false,
  clickable = false,
  handleClick,
  ...rest
}) => (
  <StyledCard
    {...rest}
    zoomOnHover={zoomOnHover}
    onClick={() => (clickable ? handleClick?.() : {})}
  >
    {children}
  </StyledCard>
)

export default Card
