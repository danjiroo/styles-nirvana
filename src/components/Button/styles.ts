/* eslint-disable indent */
import styled, { css } from 'styled-components'

import { ButtonProps } from './types'
import { ThemeProvider } from '../../themes'

type ButtonWithThemeProvider = ThemeProvider & ButtonProps

const getDynamicStyles = (props: ButtonWithThemeProvider) => {
  const {
    color = 'primary',
    colorWeight = 'DEFAULT',
    hoverColorWeight = 'DEFAULT',
    rounded = true,
    size = 'xl',
    isDisabled = false,
    layout = 'solid',
    theme,
  } = props

  return css`
    cursor: ${!isDisabled ? 'pointer' : 'not-allowed'};
    color: ${layout === 'solid' && color !== 'light'
      ? '#fff'
      : color === 'light'
      ? '#000'
      : theme?.colors[color][colorWeight]};
    background: ${layout === 'solid'
      ? theme?.colors[color][colorWeight]
      : 'transparent'};
    border: 1px
      ${layout === 'outline'
        ? `solid ${theme?.colors[color][colorWeight]}`
        : `${layout} ${theme?.colors[color][colorWeight]}`};
    border-radius: ${rounded ? theme?.border.radius : 0};
    height: ${theme?.size[size].height};
    font-size: 80%;
    opacity: ${!isDisabled ? 1 : 0.5};

    &:not(.close_btn):hover {
      color: ${layout !== 'solid' && '#fff'};
      background: ${isDisabled
        ? theme?.colors[color][colorWeight]
        : theme?.colors[color][
            hoverColorWeight ? hoverColorWeight : 'DEFAULT'
          ]};
      border-color: ${isDisabled
        ? theme?.colors[color][colorWeight]
        : theme?.colors[color][
            !isDisabled && hoverColorWeight
              ? hoverColorWeight
              : !isDisabled
              ? '300'
              : 'DEFAULT'
          ]};
      opacity: ${!isDisabled && 1};

      svg {
        stroke: ${layout !== 'solid' && '#fff'};
      }
    }

    &.close_btn:hover svg {
      stroke: ${theme?.colors[color][100]};
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  position: relative;

  &.close_btn {
    padding: 0;
    display: inline-block;
    border: 0;
    vertical-align: middle;
    margin-left: 10px;
  }

  ${getDynamicStyles};

  .button-icon-div {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }

  .button-icon-div.icon-right {
    left: unset;
    right: 12px;
  }

  .button-icon-div > i,
  .button-icon-div > div {
    object-fit: contain;
  }

  & > span {
    padding: 0 30px;
  }
`
