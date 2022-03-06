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
exports.StyledCard = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const getAlignment = ({ align = 'center' }) => {
    if (align === 'left')
        return 'flex-start';
    if (align === 'center')
        return 'center';
    if (align === 'right')
        return 'flex-end';
};
const getArrowPosition = (props) => {
    const { pointerPosition = 'left' } = props;
    if (pointerPosition === 'left') {
        return (0, styled_components_1.css) `
      left: 5px;
    `;
    }
    if (pointerPosition === 'right') {
        return (0, styled_components_1.css) `
      right: 5px;
    `;
    }
    return (0, styled_components_1.css) `
    left: 50%;
    transform: translateX(-50%);
  `;
};
exports.StyledCard = styled_components_1.default.div `
  background: #fff;
  width: ${({ block = false }) => (!block ? '100%' : 'auto')};
  max-width: ${({ block = false }) => (block ? '100%' : '250px')};
  height: ${({ height }) => (height === 'auto' ? 'auto' : `${height}px`)};
  display: ${({ block = false }) => (block ? 'block' : 'flex')};
  justify-content: ${getAlignment};
  align-items: ${getAlignment};
  position: relative;
  flex-direction: column;
  transition: transform 0.2s;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  padding: 30px 10px;
  position: relative;

  .close_btn {
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;
  }

  > div {
    margin: 5px 0;
  }

  &:hover {
    transform: ${({ zoomOnHover }) => (zoomOnHover ? 'scale(1.1)' : 'unset')};
    z-index: 1;
  }

  &::before {
    display: ${({ hasPointer = false }) => (hasPointer ? 'unset' : 'none')};
    width: 0;
    height: 0;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ffffff;
    border-left: 7px solid transparent;
    content: '';
    position: absolute;
    top: -7px;
    z-index: 20;

    ${getArrowPosition}
  }
`;
