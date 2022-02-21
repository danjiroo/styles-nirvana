/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { RefObject, useImperativeHandle } from 'react'

import useTooltip from './useTooltip'
import { StyledTooltipContainer } from './styles'

const Tooltip: React.FC<any> = React.forwardRef<any, any>(function Tooltip(
  props,
  ref
) {
  const { showTooltip, hideTooltip, isTooltipVisible, top, left } = useTooltip()

  useImperativeHandle(ref, () => ({
    handleClick: (elRef: RefObject<HTMLElement>) => {
      if (isTooltipVisible) {
        hideTooltip()
        return
      }

      const { y, x, width } = elRef!.current!.getBoundingClientRect()

      const elementId = elRef?.current?.id

      showTooltip(y, x + width + 20, `Tooltip id: ${elementId}`)
    },
  }))

  return isTooltipVisible ? (
    <StyledTooltipContainer top={top} left={left}>
      {props.children}
    </StyledTooltipContainer>
  ) : null
})

export default Tooltip
