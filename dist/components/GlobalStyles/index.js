"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modifiers = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
const styled_components_1 = require("styled-components");
const getHeaderStyles = (theme) => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const style = (0, styled_components_1.css) `
    ${headings === null || headings === void 0 ? void 0 : headings.map((header) => `
        ${header} {
          font-size: ${theme.headers[header].fontSize};
          font-weight: ${theme.headers[header].fontWeight};
          padding: 0;
          margin: 0;
        }
        `)}
  `;
    return style;
};
exports.Modifiers = (0, styled_components_1.createGlobalStyle) `
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    
  }

  // TODO : (need to add other tags/elements here)
  html, body, p, q, i, b, a {
    font-family: ${({ theme }) => theme.text.fontFamily};
    // sizes here can by dynamic base on theme (not yet implemented)
    font-size: ${({ theme }) => theme.text.size.md.fontSize};
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
`;
