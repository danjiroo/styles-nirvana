"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBadge = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledBadge = styled_components_1.default.span `
  padding: 6px 10px;
  border-radius: 3em;
  background: ${({ type = 'primary', theme }) => theme.colors[type].DEFAULT};
  color: #ffffff;
`;
//# sourceMappingURL=styles.js.map