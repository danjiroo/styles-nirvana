/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import './styles.ts'

import { StyledButton } from './styles'
import { ButtonProps } from './types'

import { Icon, RaySpinner } from '../'

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  label,
  isLoading = false,
  loadingLabel = 'Loading...',
  isDisabled = false,
  icon,
  iconLeft,
  iconRight,
  layout = 'solid',
  btnColor = 'primary',
  size = 'base',
  theme,
  ...other
}) => {
  // ! NOTE: Doing this since there's an issue in storybook,
  // ! if props are not set with default values at the parameter level,
  // ! storybook will not show any default value in the addons/docs
  const usedProps = {
    label,
    isLoading,
    loadingLabel,
    isDisabled,
    icon,
    iconLeft,
    iconRight,
    layout,
    btnColor,
    size,
    theme,
  }

  const IconLeft = iconLeft || icon
  const IconRight = iconRight

  return (
    <StyledButton type='button' {...other} {...usedProps} disabled={isDisabled}>
      {IconLeft && (
        <div className='button-icon-div'>
          <Icon
            iconName={IconLeft}
            color={layout === 'solid' ? '#fff' : btnColor}
            size={size}
          />
        </div>
      )}
      {isLoading && (
        <div className='button-icon-div'>
          <RaySpinner
            color={layout === 'solid' ? '#fff' : btnColor}
            size={theme?.loader[size].fontSize ?? 13}
            rayHeight={3}
            rayWidth={2}
          />
        </div>
      )}
      <span>{isLoading ? loadingLabel : label}</span>
      {IconRight && (
        <div className='button-icon-div'>
          <Icon
            iconName={IconRight}
            color={layout === 'solid' ? '#fff' : btnColor}
            size={size}
          />
        </div>
      )}
    </StyledButton>
  )
}

export default Button
