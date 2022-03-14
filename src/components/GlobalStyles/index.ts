/* eslint-disable @typescript-eslint/no-explicit-any */
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
          font-size: ${theme.headers[header].fontSize};
          font-weight: ${theme.headers[header].fontWeight};
          padding: 0;
          margin: 0;
        }
        `
    )}
  `

  return style
}

export const Modifiers = createGlobalStyle<ThemeProvider>`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    
  }

  html, body, p, q, i, b, a {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-weight: ${({ theme }) => theme.text.size.md.fontWeight};
  }

  h3, h4 {
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.text.size.md.fontSize};
  }

  a {
    text-decoration: none !important;
  }

  ${({ theme }) => getHeaderStyles(theme)}

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
