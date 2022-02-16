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
exports.StyledContainer = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const styled_components_1 = __importStar(require("styled-components"));
const getContainerStyles = (props) => {
    const { theme, size = '' } = props;
    if (size) {
        return (0, styled_components_1.css) `
      width: ${theme.size[size]};
    `;
    }
    return (0, styled_components_1.css) `
    width: 100%;
  `;
};
exports.StyledContainer = styled_components_1.default.div `
  ${getContainerStyles} /* background-color: red; */

  max-width: 100%
`;
//# sourceMappingURL=styles.js.map