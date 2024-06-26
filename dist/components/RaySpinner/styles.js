"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSpinner = void 0;
/* eslint-disable indent */
const styled_components_1 = __importStar(require("styled-components"));
const helper_1 = require("./helper");
const frames = (0, styled_components_1.keyframes) `
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
function generateNthChild(n) {
    let rayStyles = '';
    for (let i = 0; i < n; i++) {
        rayStyles += `
      div:nth-child(${i + 1}) {
        transform: rotate(${i * 30}deg);
        animation-delay: ${(0, helper_1.iterateDelay)(i, n)}s;
      }
    `;
    }
    return (0, styled_components_1.css) `
    ${rayStyles}
  `;
}
exports.StyledSpinner = styled_components_1.default.div `
  color: ${({ theme, color = 'dark', colorWeight = '100' }) => theme.colors[color][colorWeight]};
  display: inline-block;
  position: relative;
  width: ${({ size = 'md', theme, inButton }) => `${theme.size[size][inButton ? 'loaderInButton' : 'loader']}px`};
  height: ${({ size = 'md', theme, inButton }) => `${theme.size[size][inButton ? 'loaderInButton' : 'loader']}px`};

  div {
    transform-origin: ${({ theme, size = 'md', inButton }) => (0, helper_1.transformCalc)(theme.size[size][inButton ? 'loaderInButton' : 'loader'])};
    animation: ${frames} 1.2s linear infinite;
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: ${({ rayWidth }) => (0, helper_1.topCalc)(rayWidth)};
      left: ${({ theme, size = 'md', rayWidth, inButton }) => (0, helper_1.leftCalc)(theme.size[size][inButton ? 'loaderInButton' : 'loader'], rayWidth)};
      width: ${({ rayWidth }) => `${rayWidth}px`};
      height: ${({ rayHeight }) => `${rayHeight}px`};
      border-radius: ${({ rayRadius }) => `${rayRadius}%`};
      background: ${({ theme, color = 'dark', colorWeight = '100' }) => theme.colors[color][colorWeight]};
    }
  }
  /* Generate :nth-child(n) of div */
  ${generateNthChild(12)}
`;
