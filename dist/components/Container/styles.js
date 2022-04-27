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
exports.StyledContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const getContainerStyles = (props) => {
    const { theme, size = '' } = props;
    if (size) {
        return (0, styled_components_1.css) `
      width: 100%;

      @media screen and (min-width: 1200px) {
        width: ${theme.size[size].width};
      }
    `;
    }
    return (0, styled_components_1.css) `
    width: 100%;
  `;
};
const getFlexPosition = (props) => {
    const { centerXY, centerX, centerY, direction } = props;
    if (direction === 'column') {
        if (centerXY)
            return (0, styled_components_1.css) `
        justify-content: center;
        align-items: center;
      `;
        if (centerX)
            return (0, styled_components_1.css) `
        align-items: center;
      `;
        if (centerY)
            return (0, styled_components_1.css) `
        justify-content: center;
      `;
    }
    if (centerXY)
        return (0, styled_components_1.css) `
      justify-content: center;
      align-items: center;
    `;
    if (centerX)
        return (0, styled_components_1.css) `
      justify-content: center;
    `;
    if (centerY)
        return (0, styled_components_1.css) `
      align-items: center;
    `;
};
exports.StyledContainer = styled_components_1.default.div `
  display: flex;
  /* flex-direction: column; */
  flex-direction: ${({ direction }) => direction === 'row' ? 'row' : 'column'};
  max-width: 100%;
  ${getContainerStyles}
  ${getFlexPosition}
`;
