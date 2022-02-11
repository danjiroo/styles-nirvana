"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTooltipContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Tooltip = react_1.default.forwardRef(function Tooltip(props, ref) {
    // const portalRef = document.getElementById('portal') as HTMLElement
    // const { isTooltipVisible, top, left, content } = useTooltip()
    // console.log(
    //   '@isTooltipVisible, top, left, content',
    //   isTooltipVisible,
    //   top,
    //   left,
    //   content
    // )
    console.log('');
    return ((0, jsx_runtime_1.jsx)(exports.StyledTooltipContainer, Object.assign({ top: props.top, left: props.left, ref: ref }, { children: props.children }), void 0));
});
exports.StyledTooltipContainer = styled_components_1.default.div `
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  /* width: 100px; */
  /* height: 50px; */

  &::before {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-right: 20px solid #ddd;
    border-bottom: 15px solid transparent;
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
  }
  /* .content {
    position: relative;
    width: 100%;
    height: 100%;

    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #282727;
      bottom: -8px;
      left: 0;
    }
  } */
`;
exports.default = Tooltip;
//# sourceMappingURL=index.js.map