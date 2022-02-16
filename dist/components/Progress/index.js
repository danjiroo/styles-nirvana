"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
// temporary component
const Progress = ({ progress = 0, color }) => ((0, jsx_runtime_1.jsxs)(styles_1.StyledProgress, Object.assign({ className: 'box', color: color, progress: progress }, { children: [(0, jsx_runtime_1.jsxs)("svg", { children: [(0, jsx_runtime_1.jsx)("circle", { cx: '70', cy: '70', r: '70' }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: '70', cy: '70', r: '70' }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'num' }, { children: (0, jsx_runtime_1.jsxs)("h2", { children: [progress, (0, jsx_runtime_1.jsx)("span", { children: "%" }, void 0)] }, void 0) }), void 0)] }), void 0));
exports.default = Progress;
//# sourceMappingURL=index.js.map