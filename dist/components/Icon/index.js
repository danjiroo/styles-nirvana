"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const react_1 = require("react");
const styles_1 = require("./styles");
const Icon = (props) => {
    const { iconName = 'activity', hasDropdown = false, dropdown } = props;
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    const SVGComponent = require(`../../assets/svg/${iconName}.svg`).ReactComponent;
    const handleClick = () => {
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
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledIconContainer, Object.assign({ ref: ref }, props, { children: [(0, jsx_runtime_1.jsx)(styles_1.StyledIconDiv, Object.assign({}, props, { onClick: handleClick }, { children: (0, jsx_runtime_1.jsx)(SVGComponent, {}, void 0) }), void 0), isOpen && hasDropdown && (0, jsx_runtime_1.jsx)(DropdownComponent, {}, void 0)] }), void 0));
};
exports.default = Icon;
