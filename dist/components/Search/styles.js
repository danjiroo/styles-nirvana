"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledResultsContainer = exports.StyledSearch = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledSearch = styled_components_1.default.div `
  > div {
    margin-bottom: 0;
  }
`;
exports.StyledResultsContainer = styled_components_1.default.ul `
  list-style: none;
  margin: 0 3px;
  padding: 0;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);

  li {
    padding: 10px 15px;
    font-size: 0.9em;
  }

  li:hover {
    background: #f7f7f7;
    color: #888888;
  }
`;
//# sourceMappingURL=styles.js.map