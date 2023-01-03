import React from 'react'

import { Image } from '../'

// import defaultPlaceholder from '@assets/png/placeholder.png'

import { LogoProps } from './types'
import { StyledLogoContainer } from './styles'

const Logo: React.FC<LogoProps> = (props) => {
  const { alt = 'company logo', src = '', companyName, tagLine } = props

  const SVGComponent =
    !src.includes('http') &&
    require(`../../assets/svg/${src}.svg`).ReactComponent

  return (
    <StyledLogoContainer {...props}>
      {src.includes('http') ? <Image src={src} alt={alt} /> : <SVGComponent />}
      {companyName && (
        <h4>
          {companyName} {tagLine && <span>{tagLine}</span>}
        </h4>
      )}
    </StyledLogoContainer>
  )
}

export default Logo
