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
exports.StyledLogoContainer = exports.getStyles = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const getStyles = (props) => {
    const { orientation = 'horizontal' } = props;
    if (orientation === 'vertical') {
        return (0, styled_components_1.css) `
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
    `;
    }
};
exports.getStyles = getStyles;
exports.StyledLogoContainer = styled_components_1.default.div `
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

  ${exports.getStyles}
`;
