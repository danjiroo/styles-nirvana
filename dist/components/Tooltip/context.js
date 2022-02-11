"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolTipProvider = exports.TooltipContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.TooltipContext = (0, react_1.createContext)({});
function ToolTipProvider({ children }) {
    const [show, setShow] = (0, react_1.useState)(false);
    const [top, setTop] = (0, react_1.useState)(0);
    const [left, setLeft] = (0, react_1.useState)(0);
    const [content, setContent] = (0, react_1.useState)('');
    return ((0, jsx_runtime_1.jsx)(exports.TooltipContext.Provider, Object.assign({ value: { show, setShow, top, setTop, left, setLeft, content, setContent } }, { children: children }), void 0));
}
exports.ToolTipProvider = ToolTipProvider;
//# sourceMappingURL=context.js.map