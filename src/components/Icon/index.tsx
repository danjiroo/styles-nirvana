import React from 'react'
import { IconProps } from './types'
import { StyledIconDiv } from './styles'

const Icon: React.FC<IconProps> = ({
  color = 'primary',
  colorWeight = 'DEFAULT',
  iconName = 'activity',
  size = 'md',
  hoverable = false,
}) => {
  const SVGComponent =
    require(`../../assets/svg/${iconName}.svg`).ReactComponent

  return (
    <StyledIconDiv
      size={size}
      color={color}
      colorWeight={colorWeight}
      hoverable={hoverable}
    >
      <SVGComponent />
    </StyledIconDiv>
  )
}

export default Icon
