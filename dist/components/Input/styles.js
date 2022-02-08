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
exports.InputContainer = exports.Label = exports.TextArea = exports.StyledInput = void 0;
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
const styled_components_1 = __importStar(require("styled-components"));
const default_input_styles = (0, styled_components_1.css) `
  background-color: 'none';
  outline-color: #5cd176;
  border-color: gray;
  border-radius: 6px;
`;
const GetStyledInputStyles = ({ customTheme }) => {
    if (!customTheme)
        return default_input_styles;
    const { background_color, outline_color, border_radius } = customTheme;
    if (customTheme)
        return (0, styled_components_1.css) `
      background-color: ${background_color};
      outline-color: ${outline_color};
      border-radius: ${border_radius};
    `;
};
exports.StyledInput = styled_components_1.default.input `
  width: 100%;
  line-height: 40px;
  padding-left: 1.4rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  ${GetStyledInputStyles}
`;
exports.TextArea = styled_components_1.default.textarea `
  width: 100%;
  height: 200px;
  outline-color: #5cd176;
  padding: 1.4rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  resize: none;
`;
const inactive_input = (0, styled_components_1.css) `
  background-color: none;
  font-size: medium;
  color: #a3a3a3;
`;
const active_input = (0, styled_components_1.css) `
  font-size: small;
  font-weight: 700;
  background-color: #fff;
  color: #5c5c5c;
`;
const getLabelStyles = ({ is_input_active }) => {
    if (is_input_active)
        return active_input;
    if (!is_input_active)
        return inactive_input;
};
exports.Label = styled_components_1.default.label `
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  outline: none;
  border: none;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  margin: 0;
  z-index: 1;
  transform: ${({ is_input_active }) => is_input_active ? `translate(.8rem, -.7rem)` : `translate(1rem, .5rem)`};
  transition: transform 0.4s cubic-bezier(0.23, 0, 0, 1.01);
  &:hover {
    cursor: text;
  }
  box-sizing: border-box;
  font-size: small;

  ${getLabelStyles}
`;
exports.InputContainer = styled_components_1.default.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* flex-basis: 1 1 50%; */
  margin: 0 1rem 1rem 0;
`;
//# sourceMappingURL=styles.js.map