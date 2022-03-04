import styled from 'styled-components'

import { StyledDraggableProps } from './types'

export const StyledDraggable = styled.div<StyledDraggableProps>`
  opacity: ${({ opacity }) => opacity};
`
