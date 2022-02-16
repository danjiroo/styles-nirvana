"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
  color: ${(props) => props.color};
  display: inline-block;
  position: relative;
  width: ${(props) => {
    const { size = 'md', theme, inButton } = props;
    return `${theme.loader[size][inButton ? 'inButtonSize' : 'fontSize']}px`;
}};
  height: ${(props) => {
    const { size = 'md', theme, inButton } = props;
    return `${theme.loader[size][inButton ? 'inButtonSize' : 'fontSize']}px`;
}};

  div {
    transform-origin: ${({ theme, size = 'md', inButton }) => (0, helper_1.transformCalc)(theme.loader[size][inButton ? 'inButtonSize' : 'fontSize'])};
    animation: ${frames} 1.2s linear infinite;
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: ${(props) => (0, helper_1.topCalc)(props.rayWidth)};
      left: ${({ theme, size = 'md', rayWidth, inButton }) => (0, helper_1.leftCalc)(theme.loader[size][inButton ? 'inButtonSize' : 'fontSize'], rayWidth)};
      width: ${(props) => `${props.rayWidth}px`};
      height: ${(props) => `${props.rayHeight}px`};
      border-radius: ${(props) => `${props.rayRadius}%`};
      background: ${(props) => props.color};
    }
  }
  /* Generate :nth-child(n) of div */
  ${generateNthChild(12)}
`;
//# sourceMappingURL=styles.js.map