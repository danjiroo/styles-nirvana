/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import cn from 'classnames'

import { RaySpinner } from '../'

import defaultPlaceholder from './assets/placeholder.png'

import { ImageProps } from './types'
import { StyledImageContainer, StyledImage } from './styles'

const Image: React.FC<ImageProps> = (props) => {
  const {
    alt,
    className,
    isLoading = false,
    objectFit = 'contain',
    placeholder = defaultPlaceholder,
    rounded = false,
    src,
    ...rest
  } = props

  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const imageSrc = src || placeholder

  return (
    <StyledImageContainer rounded={rounded} className={cn('image', className)}>
      <StyledImage
        src={imageSrc}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true)
          setLoaded(false)
        }}
        {...rest}
      />
      {isLoading && (
        <div className='spinner'>
          <RaySpinner />
        </div>
      )}
    </StyledImageContainer>
  )
}

export default Image
