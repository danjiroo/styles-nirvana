import styled from 'styled-components'

import { CardProps } from './types'

export const StyledCard = styled.div<CardProps>`
  background: #fff;
  width: 100%;
  max-width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  transition: transform 0.2s;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  padding: 30px 10px;

  > div {
    margin: 5px 0;
  }

  &:hover {
    transform: ${({ zoomOnHover }) => (zoomOnHover ? 'scale(1.1)' : 'unset')};
    z-index: 1;
  }
`
