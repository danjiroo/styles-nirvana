/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Icon, RaySpinner } from '../'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = React.forwardRef<any, ButtonProps>(
  function Button(
    {
      label = '',
      isLoading = false,
      loadingLabel = 'Loading...',
      isDisabled = false,
      icon,
      iconLeft,
      iconRight,
      layout = 'solid',
      color = 'primary',
      size = 'xl',
      ...other
    },
    ref
  ) {
    const usedProps = {
      label,
      isLoading,
      loadingLabel,
      isDisabled,
      icon,
      iconLeft,
      iconRight,
      layout,
      color,
      size,
    }

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
        {!isLoading && IconLeft && (
          <div className='button-icon-div'>
            <Icon
              iconName={IconLeft}
              color={layout === 'solid' ? 'light' : color}
              size='sm'
              clickable
            />
          </div>
        )}
        {isLoading && (
          <div className='button-icon-div'>
            <RaySpinner
              color={layout === 'solid' ? 'light' : color}
              colorWeight='100'
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
        {!isLoading && IconRight && (
          <div className='button-icon-div icon-right'>
            <Icon
              iconName={IconRight}
              color={layout === 'solid' ? 'light' : color}
              size='sm'
              clickable
            />
          </div>
        )}
      </StyledButton>
    )
  }
)

export default Button
