import styled, { css } from 'styled-components'

import { StyledDroppableProps } from './types'

const getBackgroundColor = (props: StyledDroppableProps | any) => {
  const { isActive, hasChildren } = props

  if (isActive && !hasChildren) {
    return css`
      & {
        background: rgba(236, 236, 236, 0.5);
      }

      span.overlay-text {
        background: ${({ theme }) => theme.colors.primary[100]};
        color: #ffffff;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23FFFFFFFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      }
    `
  }

  return css`
    background: transparent;
  `
}

const getStyles = (props: StyledDroppableProps | any) => {
  const { hasChildren } = props

  if (!hasChildren) {
    return css`
      color: #c4c4c4ff;
      font-size: 1.7rem;
      width: 500px;
      max-width: 90%;
      line-height: 200px;
      text-align: center;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23C4C4C4FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      border-radius: 13px;
    `
  }
}

export const StyledDroppable = styled.div<StyledDroppableProps>`
  position: relative;
  width: 100%;
  height: auto;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    ${getBackgroundColor}

    > * {
      ${getStyles}
    }
  }
`
