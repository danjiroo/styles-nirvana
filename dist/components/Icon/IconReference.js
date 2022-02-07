"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const IconList_1 = require("./IconList");
const styles_1 = require("./styles");
const List = ({ name, handleClick }) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: () => handleClick(name) }, { children: [(0, jsx_runtime_1.jsx)("div", { className: `icon icon-${name}` }, void 0), (0, jsx_runtime_1.jsx)("input", { type: 'text', readOnly: true, value: name }, void 0)] }), void 0));
const IconReference = (props) => ((0, jsx_runtime_1.jsxs)(styles_1.StyledIconReference, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Icon Reference" }, void 0), (0, jsx_runtime_1.jsx)("h2", { children: "CSS mapping" }, void 0), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: 'glyphs css-mapping' }, { children: IconList_1.iconArray.map((name) => ((0, jsx_runtime_1.jsx)(List, Object.assign({ name: name }, props), name))) }), void 0)] }, void 0));
exports.default = IconReference;
//# sourceMappingURL=IconReference.js.map