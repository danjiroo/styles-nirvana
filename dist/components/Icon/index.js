"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const Icon = ({ color = 'primary', iconName = 'activity', size = 'md', hoverable = false, }) => {
    const SVGComponent = require(`../../assets/svg/${iconName}.svg`).ReactComponent;
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledIconDiv, Object.assign({ size: size, color: color, hoverable: hoverable }, { children: (0, jsx_runtime_1.jsx)(SVGComponent, {}, void 0) }), void 0));
};
exports.default = Icon;
