"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledImage = exports.StyledImageContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledImageContainer = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: ${({ rounded = false }) => (rounded ? '2em' : 0)};
  overflow: hidden;

  .spinner {
    position: absolute;
    opacity: 0.7;
  }
`;
exports.StyledImage = styled_components_1.default.img `
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit = 'contain' }) => objectFit};
`;
//# sourceMappingURL=styles.js.map