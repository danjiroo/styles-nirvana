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
const styled_components_1 = __importStar(require("styled-components"));
const getDynamicStyles = (props) => {
    const { color = 'primary', colorWeight = 'DEFAULT', hoverColorWeight = 'DEFAULT', rounded = true, size = 'xl', isDisabled = false, layout = 'solid', theme, } = props;
    return (0, styled_components_1.css) `
    cursor: ${!isDisabled ? 'pointer' : 'not-allowed'};
    color: ${layout === 'solid' ? '#fff' : theme === null || theme === void 0 ? void 0 : theme.colors[color][colorWeight]};
    background: ${layout === 'solid'
        ? theme === null || theme === void 0 ? void 0 : theme.colors[color][colorWeight]
        : 'transparent'};
    border: 1px
      ${layout === 'outline'
        ? `solid ${theme === null || theme === void 0 ? void 0 : theme.colors[color][colorWeight]}`
        : `${layout} ${theme === null || theme === void 0 ? void 0 : theme.colors[color][colorWeight]}`};
    border-radius: ${rounded ? theme === null || theme === void 0 ? void 0 : theme.border.radius : 0};
    height: ${theme === null || theme === void 0 ? void 0 : theme.size[size].height};
    font-size: 80%;
    opacity: ${!isDisabled ? 1 : 0.5};

    &:not(.close_btn):hover {
      color: ${layout !== 'solid' && '#fff'};
      background: ${theme === null || theme === void 0 ? void 0 : theme.colors[color][!isDisabled && hoverColorWeight
        ? hoverColorWeight
        : !isDisabled
            ? '300'
            : 'DEFAULT']};
      border-color: ${theme === null || theme === void 0 ? void 0 : theme.colors[color][!isDisabled && hoverColorWeight
        ? hoverColorWeight
        : !isDisabled
            ? '300'
            : 'DEFAULT']};
      opacity: ${!isDisabled && 1};

      svg {
        stroke: ${layout !== 'solid' && '#fff'};
      }
    }

    &.close_btn:hover svg {
      stroke: ${theme === null || theme === void 0 ? void 0 : theme.colors[color][100]};
    }
  `;
};
exports.StyledButton = styled_components_1.default.button `
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  position: relative;

  &.close_btn {
    padding: 0;
    display: inline-block;
    border: 0;
    vertical-align: middle;
    margin-left: 10px;
  }

  ${getDynamicStyles};

  .button-icon-div {
    height: ${({ theme, size = 'xs' }) => theme.size[size].height};
    display: flex;
    align-items: center;
  }

  .button-icon-div.icon-right {
    left: unset;
    right: 15px;
  }

  .button-icon-div > i,
  .button-icon-div > div {
    object-fit: contain;
  }

  & > span {
    padding: 0 8px;
  }
`;
