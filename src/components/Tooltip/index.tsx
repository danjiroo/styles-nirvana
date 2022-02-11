/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import { createPortal } from 'react-dom'

import useTooltip from './useTooltip'

const Tooltip: React.FC<any> = React.forwardRef<any, any>(function Tooltip(
  props,
  ref
) {
  // const portalRef = document.getElementById('portal') as HTMLElement
  // const { isTooltipVisible, top, left, content } = useTooltip()

  // console.log(
  //   '@isTooltipVisible, top, left, content',
  //   isTooltipVisible,
  //   top,
  //   left,
  //   content
  // )
  console.log('')

  return (
    <StyledTooltipContainer top={props.top} left={props.left} ref={ref}>
      {props.children}
      {/* {content} */}
    </StyledTooltipContainer>
  )
})

export interface StyledTooltipContainerProps {
  readonly top?: number
  readonly left?: number
}

export const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  /* width: 100px; */
  /* height: 50px; */

  &::before {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-right: 20px solid #ddd;
    border-bottom: 15px solid transparent;
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
  }
  /* .content {
    position: relative;
    width: 100%;
    height: 100%;

    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #282727;
      bottom: -8px;
      left: 0;
    }
  } */
`

export default Tooltip
