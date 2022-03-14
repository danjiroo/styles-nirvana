import React from 'react'
import cn from 'classnames'

import { StyledContainer } from './styles'
import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = (props) => {
  const { children, size, className } = props
  return (
    <StyledContainer size={size} className={cn('StyledContainer', className)}>
      {children}
    </StyledContainer>
  )
}

export default Container
