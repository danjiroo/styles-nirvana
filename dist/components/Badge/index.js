"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const styles_1 = require("./styles");
const Badge = (props) => {
    const { label = 'P', children, type = 'primary', closeable = false, onClick, } = props;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledBadge, Object.assign({}, props, { onClick: () => { } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: label || children }, void 0), !!closeable && ((0, jsx_runtime_1.jsx)(__1.Button, { onClick: onClick, className: 'close_btn', icon: 'x-circle', btnColor: type, size: 'xs' }, void 0))] }), void 0));
};
exports.default = Badge;
//# sourceMappingURL=index.js.map