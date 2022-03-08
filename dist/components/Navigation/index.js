"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const Navigation = ({ nav_menus }) => {
    const { config, items } = nav_menus;
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledNavWrapper, { children: config.is_enabled &&
            items.map(({ component_name, children_items = null, route = '', application_id, }) => ((0, jsx_runtime_1.jsx)("menu", { children: children_items ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(styles_1.StyledNavWithChildren, Object.assign({ className: 'StyledNavWithChildren', children_items: children_items }, { children: component_name })), children_items.map((child_nav) => ((0, jsx_runtime_1.jsx)("menu", { children: (0, jsx_runtime_1.jsx)(styles_1.StyledNavLink, Object.assign({ className: 'styled-navlink--inner', to: `/${child_nav.route}` }, { children: child_nav.name })) }, child_nav.id)))] })) : ((0, jsx_runtime_1.jsx)(styles_1.StyledNavLink, Object.assign({ className: 'styled-list', to: `/${route}` }, { children: component_name }))) }, application_id))) }));
};
exports.default = Navigation;
