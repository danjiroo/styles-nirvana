"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const classnames_1 = __importDefault(require("classnames"));
const Spinner = (props) => {
    const { className } = props;
    return ((0, jsx_runtime_1.jsx)(StyledSpinner, Object.assign({ className: (0, classnames_1.default)(className) }, { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ className: 'spinner', viewBox: '0 0 50 50' }, { children: (0, jsx_runtime_1.jsx)("circle", { className: 'path', cx: '25', cy: '25', r: '20', fill: 'none', strokeWidth: '5' }, void 0) }), void 0) }), void 0));
};
const StyledSpinner = styled_components_1.default.div `
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    animation: rotate 2s linear infinite;
    & .path {
      stroke: hsl(210, 70, 75);
      stroke: #797979;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
exports.default = Spinner;
//# sourceMappingURL=index.js.map