/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components'

import { ButtonProps } from './types'
import { theme } from '../../themes'

const getDynamicStyles = (props: ButtonProps) => {
  const {
    btnColor = 'primary',
    rounded = true,
    size = 'base',
    isDisabled = false,
    layout = 'solid',
  } = props

  return css`
    cursor: ${!isDisabled ? 'pointer' : 'not-allowed'};
    color: ${layout === 'solid' ? '#fff' : theme.colors[btnColor].DEFAULT};
    background: ${layout === 'solid'
      ? theme.colors[btnColor].DEFAULT
      : 'transparent'};
    border: 1.5px ${layout === 'outline' ? 'solid' : layout};
    border-radius: ${rounded ? theme.border.radius : 0};
    font-size: ${theme.size[size].fontSize}px;
    padding: ${theme.size[size].padding};
    opacity: ${!isDisabled ? 1 : 0.5};

    &:hover {
      color: ${layout !== 'solid' && '#fff'};
      background: ${theme.colors[btnColor][!isDisabled ? 'dark' : 'DEFAULT']};
      opacity: ${!isDisabled && 1};
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  line-height: 1;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getDynamicStyles};

  .button-icon-div {
    height: ${(props) => theme.size[props.size ?? 'base'].fontSize}px;
  }

  .button-icon-div > i,
  .button-icon-div > div {
    object-fit: contain;
  }

  & > span {
    padding: 0 8px;
  }
`
