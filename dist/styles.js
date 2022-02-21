"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledApp = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledApp = styled_components_1.default.div `
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .App {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1c0822;
    color: #eee;
  }
`;
