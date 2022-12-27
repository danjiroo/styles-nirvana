"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const react_1 = require("react");
const styles_1 = require("./styles");
const Icon = (props) => {
    const { iconName = 'activity', hasDropdown = false, dropdown, disabled = false, } = props;
    const { className } = props, rest = __rest(props, ["className"]);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    // const SVGComponent =
    //   isNaN(Number(iconName)) &&
    //   require(`../../assets/svg/${iconName}.svg`).ReactComponent
    const handleClick = () => {
        if (disabled)
            return;
        setIsOpen(!isOpen);
    };
    const handleClickOutside = () => {
        const handleClick = (e) => {
            // @ts-ignore
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    };
    (0, react_1.useEffect)(handleClickOutside, []);
    const DropdownComponent = dropdown;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledIconContainer, Object.assign({ ref: ref }, rest, { className: className }, { children: [(0, jsx_runtime_1.jsx)(styles_1.StyledIconDiv, Object.assign({}, rest, { onClick: handleClick }, { children: isNaN(Number(iconName)) ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) : iconName })), isOpen && hasDropdown && (0, jsx_runtime_1.jsx)(DropdownComponent, {})] })));
};
exports.default = Icon;
