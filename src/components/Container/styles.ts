/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'
import { GetContainerStyles } from './types'

const getContainerStyles = (props: GetContainerStyles) => {
  const { theme, size = '' } = props

  if (size) {
    return css`
      max-width: ${theme.size[size]};
    `
  }
  return css`
    max-width: 100%;
  `
}

export const StyledContainer = styled.div<GetContainerStyles>`
  ${getContainerStyles}/* background-color: red; */
`
