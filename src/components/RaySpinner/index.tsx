import React from 'react'
import { RaySpinnerProps } from './types'
import { StyledSpinner } from './styles'

const RaySpinner: React.FC<RaySpinnerProps> = ({
  color = '#374152',
  size = 'md',
  rayHeight = 9,
  rayWidth = 4,
  rayRadius = 30,
  inButton = false,
  className,
}) => {
  const rays: JSX.Element[] = []

  for (let i = 0; i < 12; i++) {
    rays.push(<div key={i} />)
  }

  return (
    <StyledSpinner
      color={color}
      size={size}
      rayHeight={rayHeight}
      rayWidth={rayWidth}
      rayRadius={rayRadius}
      className={className}
      inButton={inButton}
    >
      {rays}
    </StyledSpinner>
  )
}

export default RaySpinner
