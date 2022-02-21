import React from 'react'

import { StyledContainer } from './styles'
import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = (props) => {
  const { children, size } = props
  return (
    <StyledContainer size={size} className='StyledContainer'>
      {children}
    </StyledContainer>
  )
}

export default Container
