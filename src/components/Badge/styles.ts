import styled from 'styled-components'

import { theme } from '../../themes'

import { BadgeProps } from './types'

export const StyledBadge = styled.span<BadgeProps>`
  padding: 6px 10px;
  border-radius: 3em;
  background: ${({ type = 'primary' }) => theme.colors[type].DEFAULT};
  color: #ffffff;
`
