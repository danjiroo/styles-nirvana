/* eslint-disable indent */
import styled, { css } from 'styled-components'

import { ListProps } from './types'
import { ThemeProvider } from '../../themes'

const getPosition = (props: ListProps) => {
  const { position = 'left' } = props

  if (position === 'left') {
    return css`
      left: 0;
    `
  }

  if (position === 'right') {
    return css`
      right: 0;
    `
  }

  return css`
    left: 50%;
    transform: translateX(-50%);
  `
}

const getArrowPosition = (props: ListProps) => {
  const { position = 'left' } = props

  if (position === 'left') {
    return css`
      left: 5px;
    `
  }

  if (position === 'right') {
    return css`
      right: 5px;
    `
  }

  return css`
    left: 50%;
    transform: translateX(-50%);
  `
}

export const StyledList = styled.ul<ListProps & ThemeProvider>`
  position: absolute;
  list-style: none;
  padding: 5px 0;
  margin-top: 6px;
  border-radius: ${({ rounded = false }) => (rounded ? '5px' : '0')};
  z-index: 1;
  transition: all 0.2s linear;
  box-shadow: ${({ asDropDown = false }) =>
    asDropDown ? '0 0 30px rgba(0, 0, 0, 0.1)' : '0'};
  width: ${({ theme, size = 'md' }) => theme.list.size[size]}px;
  background: #ffffff;

  ${getPosition}

  li {
    width: 100%;
  }

  li > * {
    width: 100%;
    line-height: 27px;
    border: none;
    cursor: ${({ clickable = false }) => (clickable ? 'pointer' : 'default')};
    background: #ffffff;
    color: inherit;
    text-align: ${({ textAlignment = 'left' }) => textAlignment};
  }

  li > button {
    padding: 0 10px;
  }

  li > *:hover {
    background: ${({ theme, hoverable = false }) =>
      hoverable ? theme.colors.primary[100] : 'none'};
  }

  &::before {
    display: ${({ hasPointer = false }) => (hasPointer ? 'unset' : 'none')};
    width: 0;
    height: 0;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ffffff;
    border-left: 7px solid transparent;
    content: '';
    position: absolute;
    top: -7px;
    z-index: 20;

    ${getArrowPosition}
  }
`
