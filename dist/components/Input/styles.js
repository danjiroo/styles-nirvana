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
exports.StyledIcon = exports.InputContainer = exports.Label = exports.StyledTextArea = exports.StyledInput = void 0;
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
const styled_components_1 = __importStar(require("styled-components"));
const default_input_styles = (0, styled_components_1.css) `
  background-color: none;
  outline-color: #5cd176;
  border-color: #c5c5c5;
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
  padding-left: 2.6rem;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  border-style: solid;
  border-width: 0.063rem;
  -webkit-text-fill-color: none !important;
  ${GetStyledInputStyles}
`;
exports.StyledTextArea = styled_components_1.default.textarea `
  width: 100%;
  min-height: 8rem;
  outline-color: #5cd176;
  margin: 0;
  max-width: 100%;
  box-sizing: border-box;
  resize: none;
  padding: 1rem 0 0 2.6rem;
  border-style: solid;
  border-width: 0.063rem;
  ${GetStyledInputStyles}
`;
const move = (0, styled_components_1.keyframes) `
  0% { 
    transform: translate(2.5rem, 0.5rem);
    background-color: white;
  }
  20%{
    opacity: .2;
  }
  40% {  
    transform: translate(2.5rem, -.8rem);
    background-color: white;
  }
  100% {  
    transform: translate(2.5rem, -.5rem);
    background-color: white;
    opacity: 1;
  }
`;
const moveRerverse = (0, styled_components_1.keyframes) `
  0% { 
    transform: translate(2.5rem, 0.8rem);
    background-color: white;
    opacity: 1;
  }
  20%{
    transform: translate(2.5rem, -.8rem);
    background-color: white;
  }

  100% {  
    transform: translate(2.5rem, .9rem);
    background-color: white;
  }
`;
const inactive_input = (0, styled_components_1.css) `
  font-size: medium;
  color: #a3a3a3;
  padding-right: 1rem;
  animation: ${moveRerverse} 0.8s cubic-bezier(0.25, 0, 0.01, 1) forwards;
`;
const active_input = (0, styled_components_1.css) `
  font-size: small;
  font-weight: 700;
  color: #5c5c5c;
  animation: ${move} 0.6s cubic-bezier(0.25, 0, 0.01, 1) forwards;
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
  padding: 0rem 0.3rem 0 0.3rem;
  margin: 0;
  z-index: 1;
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
  margin: 0 0 1rem 0;
`;
exports.StyledIcon = styled_components_1.default.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0.6rem, 0.7rem);
`;
