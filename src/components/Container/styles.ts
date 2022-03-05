import styled, { css } from 'styled-components'
import { GetContainerStyles } from './types'

const getContainerStyles = (props: GetContainerStyles) => {
  const { theme, size = '' } = props

  if (size) {
    return css`
      width: 100%;
      @media screen and (min-width: 1200px) {
        width: ${theme.size[size]};
      }
    `
  }
  return css`
    width: 100%;
  `
}

export const StyledContainer = styled.div<GetContainerStyles>`
  ${getContainerStyles}
  display: flex;
  flex-direction: column;
  max-width: 100%;
`
