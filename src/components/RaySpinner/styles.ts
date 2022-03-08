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
  color: ${({ theme, color = 'dark', colorWeight = '100' }) =>
    theme.colors[color][colorWeight]};
  display: inline-block;
  position: relative;
  width: ${({ size = 'md', theme, inButton }) =>
    `${theme.size[size][inButton ? 'loaderInButton' : 'loader']}px`};
  height: ${({ size = 'md', theme, inButton }) =>
    `${theme.size[size][inButton ? 'loaderInButton' : 'loader']}px`};

  div {
    transform-origin: ${({ theme, size = 'md', inButton }) =>
      transformCalc(theme.size[size][inButton ? 'loaderInButton' : 'loader'])};
    animation: ${frames} 1.2s linear infinite;
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: ${({ rayWidth }) => topCalc(rayWidth)};
      left: ${({ theme, size = 'md', rayWidth, inButton }) =>
        leftCalc(
          theme.size[size][inButton ? 'loaderInButton' : 'loader'],
          rayWidth
        )};
      width: ${({ rayWidth }) => `${rayWidth}px`};
      height: ${({ rayHeight }) => `${rayHeight}px`};
      border-radius: ${({ rayRadius }) => `${rayRadius}%`};
      background: ${({ theme, color = 'dark', colorWeight = '100' }) =>
        theme.colors[color][colorWeight]};
    }
  }
  /* Generate :nth-child(n) of div */
  ${generateNthChild(12)}
`
