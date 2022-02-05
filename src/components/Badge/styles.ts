import styled from 'styled-components'

import { BadgeProps } from './types'

export const StyledBadge = styled.span<BadgeProps>`
  padding: 6px 10px;
  border-radius: 3em;
  background: ${({ type = 'primary', theme }) => theme.colors[type].DEFAULT};
  color: #ffffff;
`
