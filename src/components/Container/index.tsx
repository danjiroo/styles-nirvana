import React from 'react'
import cn from 'classnames'

import { StyledContainer } from './styles'
import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = (props) => {
  const { children, size, className, direction, centerXY, centerX, centerY } =
    props
  return (
    <StyledContainer
      size={size}
      direction={direction}
      centerXY={centerXY}
      centerX={centerX}
      centerY={centerY}
      className={cn('StyledContainer', className)}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
