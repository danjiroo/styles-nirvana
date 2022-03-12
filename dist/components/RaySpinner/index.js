"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const RaySpinner = ({ color = 'dark', colorWeight = '100', size = 'md', rayHeight = 9, rayWidth = 4, rayRadius = 30, inButton = false, className, }) => {
    const rays = [];
    for (let i = 0; i < 12; i++) {
        rays.push((0, jsx_runtime_1.jsx)("div", {}, i));
    }
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledSpinner, Object.assign({ color: color, colorWeight: colorWeight, size: size, rayHeight: rayHeight, rayWidth: rayWidth, rayRadius: rayRadius, className: className, inButton: inButton }, { children: rays }), void 0));
};
exports.default = RaySpinner;
