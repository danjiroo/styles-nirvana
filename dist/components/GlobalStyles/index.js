"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modifiers = void 0;
/* eslint-disable indent */
const styled_components_1 = require("styled-components");
const getHeaderStyles = (theme) => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const style = (0, styled_components_1.css) `
    ${headings === null || headings === void 0 ? void 0 : headings.map((header) => `
        ${header} {
          font-size: ${theme.headers[header].fontSize}px;
          font-weight: ${theme.headers[header].fontWeight};
        }
        `)}
  `;
    return style;
};
exports.Modifiers = (0, styled_components_1.createGlobalStyle) `
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
`;
//# sourceMappingURL=index.js.map