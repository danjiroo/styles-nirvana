/* eslint-disable indent */
import styled, {
  keyframes,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { RaySpinnerProps } from './types'
import { transformCalc, topCalc, leftCalc, iterateDelay } from './helper'

const frames = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

function generateNthChild(n: number): FlattenSimpleInterpolation {
  let rayStyles = ''

  for (let i = 0; i < n; i++) {
    rayStyles += `
      div:nth-child(${i + 1}) {
        transform: rotate(${i * 30}deg);
        animation-delay: ${iterateDelay(i, n)}s;
      }
    `
  }

  return css`
    ${rayStyles}
  `
}

export const StyledSpinner = styled.div<RaySpinnerProps>`
  color: ${(props) => props.color};
  display: inline-block;
  position: relative;
  width: ${({ size = 'base', theme }) => `${theme.loader[size].fontSize}px`};
  height: ${({ size = 'base', theme }) => `${theme.loader[size].fontSize}px`};
  div {
    transform-origin: ${({ theme, size = 'base' }) =>
      transformCalc(theme.loader[size].fontSize)};
    animation: ${frames} 1.2s linear infinite;
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: ${(props) => topCalc(props.rayWidth)};
      left: ${({ theme, size = 'base', rayWidth }) =>
        leftCalc(theme.loader[size].fontSize, rayWidth)};
      width: ${(props) => `${props.rayWidth}px`};
      height: ${(props) => `${props.rayHeight}px`};
      border-radius: ${(props) => `${props.rayRadius}%`};
      background: ${(props) => props.color};
    }
  }
  /* Generate :nth-child(n) of div */
  ${generateNthChild(12)}
`
