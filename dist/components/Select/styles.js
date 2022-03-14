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
exports.Label = exports.StyledField = exports.StyledSelectContainer = void 0;
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
const styled_components_1 = __importStar(require("styled-components"));
const getStyles = (props) => {
    const { label, error, animatedLabel = false } = props;
    return (0, styled_components_1.css) `
    .select-component {
      margin: ${animatedLabel
        ? 0
        : label && !error
            ? '15px 0'
            : label && error
                ? '25px 0'
                : !label && error
                    ? '0 0 25px'
                    : '5px 0'};
    }

    .select-label {
      top: ${label && !error ? '-5px' : label && error ? '5px' : 0};
    }
    .select-error {
      bottom: ${label && !error ? '-5px' : label && error ? '5px' : 0};
    }
  `;
};
exports.StyledSelectContainer = styled_components_1.default.div `
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  .select-icon-container {
    padding-right: 5px;
    margin-top: ${({ label, error }) => (!label && error ? '-25px' : 0)};
  }

  > * {
    transition: all 0.2s ease;
  }
`;
exports.StyledField = styled_components_1.default.div `
  position: relative;
  width: 100%;
  font-size: 80%;

  ${getStyles}

  .select-label {
    font-size: 12px;
    position: absolute;
  }

  span.select-error {
    color: ${({ theme }) => theme.colors.danger.DEFAULT};
    font-size: 12px;
    position: absolute;
    bottom: 2px;
  }

  span.select-required {
    color: ${({ theme }) => theme.colors.danger.DEFAULT};
    font-size: 12px;
    position: relative;
    bottom: 0;
  }

  div[class*='-control'] {
    min-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
    max-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
    border-radius: ${({ theme }) => theme.border.radius};
  }

  div[class*='IndicatorsContainer'] {
    min-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
    max-height: ${({ theme, size = 'xl' }) => theme.size[size].height};
  }

  div[class*='ValueContainer'] {
    top: -1px;
    padding-left: ${({ innerIcon = false }) => (innerIcon ? '40px' : '5px')};
  }

  .select-icon-container.inner-icon {
    position: absolute;
    top: 50%;
    z-index: 10;
    left: 10px;
    transform: translateY(-50%);
    opacity: 0.1;
  }
`;
const move = (0, styled_components_1.keyframes) `
  0% { 
    transform: translate(2.4rem, 0.5rem);
    background-color: white;
  }
  20%{
    opacity: .2;
  }
  40% {  
    transform: translate(2.4rem, -.8rem);
    background-color: white;
  }
  100% {  
    transform: translate(2.4rem, -.4rem);
    background-color: white;
    opacity: 1;
  }
`;
const moveRerverse = (0, styled_components_1.keyframes) `
  0% { 
    transform: translate(2.4rem, 0.8rem);
    background-color: white;
    opacity: 1;
  }
  20%{
    transform: translate(2.4rem, -.8rem);
    background-color: white;
  }

  100% {  
    transform: translate(2.4rem, .78rem);
    background-color: white;
  }
`;
const inactive_input = (0, styled_components_1.css) `
  color: ${({ theme }) => theme.colors.dark[50]};
  padding-right: 1rem;
  animation: ${moveRerverse} 0.8s cubic-bezier(0.25, 0, 0.01, 1) forwards;
`;
const active_input = (0, styled_components_1.css) `
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary[300]};
  animation: ${move} 0.6s cubic-bezier(0.25, 0, 0.01, 1) forwards;
`;
const getLabelStyles = ({ isInputActive }) => {
    if (isInputActive)
        return active_input;
    if (!isInputActive)
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
  z-index: 100;

  &:hover {
    cursor: text;
  }
  box-sizing: border-box;
  font-size: small;

  ${getLabelStyles}
`;
