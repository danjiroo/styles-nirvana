/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'

import { SpinnerProps } from './types'

const Spinner: React.FC<SpinnerProps> = (props) => {
  const { className } = props

  return (
    <StyledSpinner className={cn(className)}>
      <svg className='spinner' viewBox='0 0 50 50'>
        <circle
          className='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='5'
        ></circle>
      </svg>
    </StyledSpinner>
  )
}

const StyledSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    animation: rotate 2s linear infinite;
    & .path {
      stroke: hsl(210, 70, 75);
      stroke: #797979;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export default Spinner
