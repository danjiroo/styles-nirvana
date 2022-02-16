/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useTheme } from 'styled-components'

import { Icon, RaySpinner } from '../'
import { StyledButton } from './styles'
import { ThemeDefinition } from 'themes'
import { ButtonProps } from './types'

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = React.forwardRef<any, ButtonProps>(
  function Button(
    {
      label,
      isLoading = false,
      loadingLabel = 'Loading...',
      isDisabled = false,
      icon,
      iconLeft,
      iconRight,
      layout = 'solid',
      btnColor = 'primary',
      size = 'md',
      ...other
    },
    ref
  ) {
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
    }

    const { colors } = useTheme() as ThemeDefinition

    const IconLeft = iconLeft || icon
    const IconRight = iconRight

    return (
      <StyledButton
        type='button'
        {...other}
        {...usedProps}
        disabled={isDisabled}
        ref={ref}
      >
        {IconLeft && (
          <div className='button-icon-div'>
            <Icon
              iconName={IconLeft}
              color={layout === 'solid' ? 'light' : btnColor}
              size={size}
            />
          </div>
        )}
        {isLoading && (
          <div className='button-icon-div'>
            <RaySpinner
              color={
                layout === 'solid'
                  ? colors['light'].DEFAULT
                  : colors[btnColor].DEFAULT
              }
              size={size}
              rayHeight={3}
              rayWidth={2}
              inButton
            />
          </div>
        )}
        {isLoading ? (
          <span>{loadingLabel}</span>
        ) : (
          label && <span>{label}</span>
        )}
        {IconRight && (
          <div className='button-icon-div'>
            <Icon
              iconName={IconRight}
              color={layout === 'solid' ? 'light' : btnColor}
              size={size}
            />
          </div>
        )}
      </StyledButton>
    )
  }
)

export default Button
