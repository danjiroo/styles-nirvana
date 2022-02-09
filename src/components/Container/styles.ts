/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'
import { GetContainerStyles } from './types'

const getContainerStyles = (props: GetContainerStyles) => {
  const { theme, size = '' } = props

  console.log('StyledContainer', props)

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
  ${getContainerStyles}/* background-color: red; */
`
