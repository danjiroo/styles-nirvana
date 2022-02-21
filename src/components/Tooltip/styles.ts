import styled from 'styled-components'

import { StyledTooltipContainerProps } from './types'

export const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  &::before {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-right: 20px solid #eee;
    border-bottom: 15px solid transparent;
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    z-index: 20;
  }
`
