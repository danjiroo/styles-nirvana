import styled, { css } from 'styled-components'
import { GetContainerStyles } from './types'

const getContainerStyles = (props: GetContainerStyles) => {
  const { theme, size = '' } = props
  if (size) {
    return css`
      width: 100%;

      @media screen and (min-width: 1200px) {
        width: ${theme.size[size].width};
      }
    `
  }
  return css`
    width: 100%;
  `
}

const getFlexPosition = (props: GetContainerStyles) => {
  const { centerXY, centerX, centerY, direction } = props
  if (direction === 'column') {
    if (centerXY)
      return css`
        justify-content: center;
        align-items: center;
      `
    if (centerX)
      return css`
        align-items: center;
      `
    if (centerY)
      return css`
        justify-content: center;
      `
  }
  if (centerXY)
    return css`
      justify-content: center;
      align-items: center;
    `
  if (centerX)
    return css`
      justify-content: center;
    `
  if (centerY)
    return css`
      align-items: center;
    `
}

const getContainerHeight = (props: GetContainerStyles) => {
  const { theme, height = '' } = props
  if (height)
    return css`
      height: ${theme.size[height].containerHeight};
    `
}

export const StyledContainer = styled.div<GetContainerStyles>`
  display: flex;
  /* flex-direction: column; */
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};
  max-width: 100%;
  background-color: ${({ customBg = 'FFF' }) => `#${customBg}`};
  ${getContainerStyles}
  ${getFlexPosition}
  ${getContainerHeight}
`
