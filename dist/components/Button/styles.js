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
exports.StyledButton = void 0;
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const styled_components_1 = __importStar(require("styled-components"));
const getDynamicStyles = (props) => {
    const { btnColor = 'primary', rounded = true, size = 'base', isDisabled = false, layout = 'solid', theme, } = props;
    return (0, styled_components_1.css) `
    cursor: ${!isDisabled ? 'pointer' : 'not-allowed'};
    color: ${layout === 'solid' ? '#fff' : theme === null || theme === void 0 ? void 0 : theme.colors[btnColor].DEFAULT};
    background: ${layout === 'solid'
        ? theme === null || theme === void 0 ? void 0 : theme.colors[btnColor].DEFAULT
        : 'transparent'};
    border: 1.5px ${layout === 'outline' ? 'solid' : layout};
    border-radius: ${rounded ? theme === null || theme === void 0 ? void 0 : theme.border.radius : 0};
    font-size: ${theme === null || theme === void 0 ? void 0 : theme.button[size].fontSize}px;
    padding: ${theme === null || theme === void 0 ? void 0 : theme.button[size].padding};
    opacity: ${!isDisabled ? 1 : 0.5};

    &:hover {
      color: ${layout !== 'solid' && '#fff'};
      background: ${theme === null || theme === void 0 ? void 0 : theme.colors[btnColor][!isDisabled ? 'dark' : 'DEFAULT']};
      opacity: ${!isDisabled && 1};
    }
  `;
};
exports.StyledButton = styled_components_1.default.button `
  line-height: 1;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => {
    console.log('-------button', props);
    return 'red';
}};

  ${getDynamicStyles};

  .button-icon-div {
    height: ${({ theme, size }) => { var _a, _b; return (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.button) === null || _a === void 0 ? void 0 : _a[size !== null && size !== void 0 ? size : 'base']) === null || _b === void 0 ? void 0 : _b.fontSize; }}px;
  }

  .button-icon-div > i,
  .button-icon-div > div {
    object-fit: contain;
  }

  & > span {
    padding: 0 8px;
  }
`;
//# sourceMappingURL=styles.js.map