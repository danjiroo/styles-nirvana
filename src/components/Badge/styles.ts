import styled from 'styled-components'

import { BadgeProps } from './types'

export const StyledBadge = styled.span<BadgeProps>`
  padding: ${({ size = 'md', theme }) => theme.badge[size].padding};
  border-radius: 3em;
  background: ${({ type = 'primary', theme }) => theme.colors[type].DEFAULT};
  color: #ffffff;

  > span {
    font-size: ${({ size = 'md', theme }) => theme.badge[size].fontSize}px;
  }
`
