import React from 'react'
import { RaySpinnerProps } from './types'
import { StyledSpinner } from './styled'

const RaySpinner: React.FC<RaySpinnerProps> = ({
  color = '#374152',
  size = 'base',
  rayHeight = 9,
  rayWidth = 4,
  rayRadius = 30,
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
    >
      {rays}
    </StyledSpinner>
  )
}

export default RaySpinner
