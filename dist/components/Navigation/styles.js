"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledNavWrapper = exports.StyledNavWithChildren = exports.StyledNavLink = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
exports.StyledNavLink = (0, styled_components_1.default)(react_router_dom_1.NavLink) `
  color: #747474;
  list-style: none;
  text-decoration: none;
  font-weight: 700;
  margin: 0;
  &.active {
    color: #04d997;
    font-weight: 700;
  }
  font-weight: 500;
`;
exports.StyledNavWithChildren = styled_components_1.default.menu `
  color: #b3b3b3;
  margin: 0;
  padding: 0;
  font-weight: 200;
`;
exports.StyledNavWrapper = styled_components_1.default.div `
  align-items: flex-start;
  border: 2px solid black;
  box-sizing: border-box;
  /* background-color: yellow; */
  height: 100%;
  max-width: 300px;
  @media screen {
  }
`;
//# sourceMappingURL=styles.js.map