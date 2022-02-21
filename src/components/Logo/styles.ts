import styled, { css } from 'styled-components'

import { LogoProps } from './types'

export const getStyles = (props: LogoProps) => {
  const { orientation = 'horizontal' } = props

  if (orientation === 'vertical') {
    return css`
      display: block;

      > div {
        width: 80px;
        margin: 0 auto;
      }

      h4 {
        margin: 10px 0;
        text-align: center;
        width: 100%;
      }
    `
  }
}

export const StyledLogoContainer = styled.div<LogoProps>`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;

  > div {
    width: 25%;
  }

  h4 {
    display: flex;
    flex-direction: column;
    width: 75%;
    word-wrap: break-word;
    span {
      font-size: 13px;
      font-weight: 300;
    }
  }

  ${getStyles}
`
