/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components'

import { ButtonProps } from './types'
import { ThemeProvider } from '../../themes'

type ButtonWithThemeProvider = ThemeProvider & ButtonProps

const getDynamicStyles = (props: ButtonWithThemeProvider) => {
  const {
    btnColor = 'primary',
    rounded = true,
    size = 'md',
    isDisabled = false,
    layout = 'solid',
    theme,
  } = props

  return css`
    cursor: ${!isDisabled ? 'pointer' : 'not-allowed'};
    color: ${layout === 'solid' ? '#fff' : theme?.colors[btnColor].DEFAULT};
    background: ${layout === 'solid'
      ? theme?.colors[btnColor].DEFAULT
      : 'transparent'};
    border: 1.5px ${layout === 'outline' ? 'solid' : layout};
    border-radius: ${rounded ? theme?.border.radius : 0};
    font-size: ${theme?.button[size].fontSize}px;
    padding: ${theme?.button[size].padding};
    opacity: ${!isDisabled ? 1 : 0.5};

    &:not(.close_btn):hover {
      color: ${layout !== 'solid' && '#fff'};
      background: ${theme?.colors[btnColor][!isDisabled ? 'dark' : 'DEFAULT']};
      opacity: ${!isDisabled && 1};

      svg {
        stroke: ${layout !== 'solid' && '#fff'};
      }
    }

    &.close_btn:hover svg {
      stroke: ${theme?.colors[btnColor].dark};
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  line-height: 1;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ block }) => (block ? '100%' : 'auto')};

  &.close_btn {
    padding: 0;
    display: inline-block;
    border: 0;
    vertical-align: middle;
    margin-left: 10px;
  }

  ${getDynamicStyles};

  .button-icon-div {
    height: ${({ theme, size }) => theme?.button?.[size ?? 'md']?.fontSize}px;
    display: flex;
    align-items: center;
  }

  .button-icon-div > i,
  .button-icon-div > div {
    object-fit: contain;
  }

  & > span {
    padding: 0 8px;
  }
`
