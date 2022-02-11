"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_1 = require("./styled");
const __1 = require("../");
const Menu = (props) => {
    const { children, align } = props;
    const [is_open, toggleOpen] = (0, react_1.useState)(true);
    const handleOpenMenu = () => toggleOpen(!is_open);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(styled_1.MenuContainer, { children: [(0, jsx_runtime_1.jsx)(styled_1.IconContainer, Object.assign({ align: align }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: is_open ? 'close' : 'burger-menu', color: 'light', size: 'base', onClick: handleOpenMenu }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(styled_1.MenuContent, Object.assign({ align: align, is_open: is_open }, { children: children }), void 0)] }, void 0) }, void 0));
};
exports.default = Menu;
//# sourceMappingURL=index.js.map