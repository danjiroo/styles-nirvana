import styled from 'styled-components'

import { CardProps } from './types'

export const StyledCard = styled.div<CardProps>`
  background: #fff;
  width: ${({ block = false }) => (!block ? '100%' : 'auto')};
  max-width: ${({ block = false }) => (block ? '100%' : '250px')};
  height: ${({ height }) => (height === 'auto' ? 'auto' : `${height}px`)};
  display: ${({ block = false }) => (block ? 'block' : 'flex')};
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  transition: transform 0.2s;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  padding: 30px 10px;

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
`
