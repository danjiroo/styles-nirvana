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
exports.IconContainer = exports.MenuContainer = exports.MenuContent = exports.StyledMenu = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.StyledMenu = styled_components_1.default.div `
  background-color: red;
  height: 50px;
  width: 50px;
`;
const openMenu = (0, styled_components_1.keyframes) `
    0% {
        transform: scaleX(0.2);
    }
    80%{
        transform: scaleX(.9);
    }
    100%{
        transform: scaleX(.6);
    }
`;
const isOpen = (0, styled_components_1.css) `
  /* animation: ${openMenu} 5s cubic-bezier(0.25, 0, 0.01, 1) forwards; */
  /* transform: scaleX(1);
  transition: transform 1s cubic-bezier(0.25, 0, 0.01, 1); */
  transform: translateX(0);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.25, 0, 0.01, 1);
  transform-origin: left;
  /* background-color: #8db5bb; */
`;
const getMenuContentStyles = (props) => {
    const { is_open } = props;
    if (is_open)
        return isOpen;
    return (0, styled_components_1.css) `
    /* transform: scaleX(0);
    transition: transform 1s cubic-bezier(0.25, 0, 0.01, 1); */
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.25, 0, 0.01, 1);
    transform-origin: left;
  `;
};
exports.MenuContent = styled_components_1.default.div `
  height: 400px;
  width: 100%;
  ${getMenuContentStyles}
`;
exports.MenuContainer = styled_components_1.default.div `
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  /* text-align: right; */
`;
exports.IconContainer = styled_components_1.default.div `
  width: 20px;
  display: flex;
  justify-content: ${({ align }) => {
    if (!align)
        return 'flex-start';
    if (align === 'left')
        return 'flex-start';
    return 'flex-end';
}};
  cursor: pointer;
`;
