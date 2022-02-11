"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTooltipContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledTooltipContainer = styled_components_1.default.div `
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  &::before {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-right: 20px solid #eee;
    border-bottom: 15px solid transparent;
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    z-index: 20;
  }
`;
//# sourceMappingURL=styles.js.map