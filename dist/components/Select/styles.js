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
exports.StyledField = exports.StyledSelectContainer = void 0;
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
const styled_components_1 = __importStar(require("styled-components"));
const getStyles = (props) => {
    const { label, error } = props;
    return (0, styled_components_1.css) `
    .select-component {
      margin: ${label && !error
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
  padding-left: ${({ icon }) => (icon ? 5 : 0)}px;
  width: 100%;

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
    min-height: ${({ theme, size = 'xs' }) => theme.size[size].height};
    max-height: ${({ theme, size = 'xs' }) => theme.size[size].height};
  }

  div[class*='IndicatorsContainer'] {
    min-height: ${({ theme, size = 'xs' }) => theme.size[size].height};
    max-height: ${({ theme, size = 'xs' }) => theme.size[size].height};
  }
`;
