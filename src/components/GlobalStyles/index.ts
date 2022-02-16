/* eslint-disable indent */
import { css, createGlobalStyle } from 'styled-components'

import { ThemeProvider } from '../../themes'

const getHeaderStyles = (theme: any) => {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  const style = css<ThemeProvider>`
    ${headings?.map(
      (header) =>
        `
        ${header} {
          font-size: ${theme.headers[header].fontSize}px;
          font-weight: ${theme.headers[header].fontWeight};
        }
        `
    )}
  `

  return style
}

export const Modifiers = createGlobalStyle<ThemeProvider>`
  @import url(${({ theme }) => theme.text.fontUrl});

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.text.fontFamily}
  }

  ${({ theme }) => getHeaderStyles(theme)}

  // Custom Classnames

  .letter-spaced--wider {
    /* letter-spacing: 1rem!important;
    text-indent: 1rem !important;

      @media screen and (min-width: 992px) {
        letter-spacing: .2rem;
    } */
    /* letter-spacing: 1rem;
    text-indent: 1rem !important; */
  }

  .condense {
    font-family: 'Barlow Semi Condensed', sans-serif!important;
  }
  .margin--right {
    margin-right: 6rem;
  }
  .margin__spacer {
    margin-right: .5rem;
  }

  .margin--top {
    margin: 1rem 0 1rem 0;
  }
`
