"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBadge = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledBadge = styled_components_1.default.span `
  padding: ${({ size = 'md', theme }) => theme.badge[size].padding};
  border-radius: 3em;
  background: ${({ color = 'primary', colorWeight = 'DEFAULT', theme }) => theme.colors[color][colorWeight]};
  color: #ffffff;

  > span {
    font-size: ${({ size = 'md', theme }) => theme.badge[size].fontSize}px;
  }
`;
