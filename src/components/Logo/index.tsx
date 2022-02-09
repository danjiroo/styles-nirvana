import React from 'react'

import { Image } from '../'

import defaultPlaceholder from '../Image/assets/placeholder.png'

import { LogoProps } from './types'
import { StyledLogoContainer } from './styles'

const Logo: React.FC<LogoProps> = (props) => {
  const { alt = 'company logo', src = '', companyName, tagLine } = props

  const imageSrc = src || defaultPlaceholder

  return (
    <StyledLogoContainer {...props}>
      <Image src={imageSrc} alt={alt} />
      {companyName && (
        <h4>
          {companyName} {tagLine && <span>{tagLine}</span>}
        </h4>
      )}
    </StyledLogoContainer>
  )
}

export default Logo