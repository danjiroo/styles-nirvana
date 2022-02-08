import styled from 'styled-components'

import { ImageProps } from './types'

export const StyledImageContainer = styled.div<Pick<ImageProps, 'rounded'>>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: ${({ rounded = false }) => (rounded ? '2em' : 0)};
  overflow: hidden;

  .spinner {
    position: absolute;
    opacity: 0.7;
  }
`

export const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit = 'contain' }) => objectFit};
`
