"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconList_1 = require("./IconList");
const _1 = __importDefault(require("./"));
const styles_1 = require("./styles");
const List = ({ name, handleClick }) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: () => handleClick(name) }, { children: [(0, jsx_runtime_1.jsx)(_1.default, { iconName: name, color: 'dark' }, void 0), (0, jsx_runtime_1.jsx)("input", { type: 'text', readOnly: true, value: name }, void 0)] }), void 0));
const IconReference = (props) => ((0, jsx_runtime_1.jsxs)(styles_1.StyledIconReference, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Icon Reference" }, void 0), (0, jsx_runtime_1.jsx)("h2", { children: "SVG" }, void 0), (0, jsx_runtime_1.jsx)("ul", { children: IconList_1.iconArray.map((name) => ((0, jsx_runtime_1.jsx)(List, Object.assign({ name: name }, props), name))) }, void 0)] }, void 0));
exports.default = IconReference;
//# sourceMappingURL=IconReference.js.map