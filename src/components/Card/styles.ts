import styled, { css } from 'styled-components'

import { CardProps } from './types'

const getAlignment = ({ align = 'center' }) => {
  if (align === 'left') return 'flex-start'
  if (align === 'center') return 'center'
  if (align === 'right') return 'flex-end'
}

const getArrowPosition = (props: CardProps) => {
  const { pointerPosition = 'left' } = props

  if (pointerPosition === 'left') {
    return css`
      left: 5px;
    `
  }

  if (pointerPosition === 'right') {
    return css`
      right: 5px;
    `
  }

  return css`
    left: 50%;
    transform: translateX(-50%);
  `
}

export const StyledCard = styled.div<CardProps>`
  background: #fff;
  width: ${({ block = false }) => (!block ? '100%' : 'auto')};
  max-width: ${({ block = false }) => (block ? '100%' : '250px')};
  height: ${({ height }) => (height === 'auto' ? 'auto' : `${height}px`)};
  display: ${({ block = false }) => (block ? 'block' : 'flex')};
  justify-content: ${getAlignment};
  align-items: ${getAlignment};
  position: relative;
  flex-direction: column;
  transition: transform 0.2s;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  padding: 30px 10px;
  position: relative;

  .close_btn {
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;
  }

  > div {
    margin: 5px 0;
  }

  &:hover {
    transform: ${({ zoomOnHover }) => (zoomOnHover ? 'scale(1.1)' : 'unset')};
    z-index: 1;
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
