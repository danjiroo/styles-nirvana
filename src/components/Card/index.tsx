import React from 'react'
import cn from 'classnames'

import { Icon } from '../'

import { StyledCard } from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  className,
  children,
  zoomOnHover = false,
  clickable = false,
  closeable = false,
  handleClick,
  handleClose,
  closeIconName = 'x-circle',
  ...rest
}) => (
  <StyledCard
    {...rest}
    className={cn(className)}
    zoomOnHover={zoomOnHover}
    onClick={() => (clickable ? handleClick?.() : {})}
  >
    {closeable && (
      <Icon
        onClick={handleClose}
        className='close_btn'
        iconName={closeIconName}
        clickable
        hoverable
      />
    )}
    {children}
  </StyledCard>
)

export default Card
