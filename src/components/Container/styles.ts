import styled, { css } from 'styled-components'
import { GetContainerStyles } from './types'

const getContainerStyles = (props: GetContainerStyles) => {
  const { theme, size = '' } = props

  if (size) {
    return css`
      width: ${theme.size[size]};
    `
  }
  return css`
    width: 100%;
  `
}

export const StyledContainer = styled.div<GetContainerStyles>`
  ${getContainerStyles}

  max-width: 100%
`
