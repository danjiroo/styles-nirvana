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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = __importDefault(require("react"));
const __1 = require("../");
const styles_1 = require("./styles");
const Button = react_1.default.forwardRef(function Button(_a, ref) {
    var { label = '', isLoading = false, loadingLabel = 'Loading...', isDisabled = false, icon, iconLeft, iconRight, layout = 'solid', color = 'primary', size = 'xl' } = _a, other = __rest(_a, ["label", "isLoading", "loadingLabel", "isDisabled", "icon", "iconLeft", "iconRight", "layout", "color", "size"]);
    const usedProps = {
        label,
        isLoading,
        loadingLabel,
        isDisabled,
        icon,
        iconLeft,
        iconRight,
        layout,
        color,
        size,
    };
    const IconLeft = iconLeft || icon;
    const IconRight = iconRight;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledButton, Object.assign({ type: 'button' }, other, usedProps, { disabled: isDisabled, ref: ref }, { children: [!isLoading && IconLeft && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div' }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: IconLeft, color: layout === 'solid' ? 'light' : color, size: size }, void 0) }), void 0)), isLoading && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div' }, { children: (0, jsx_runtime_1.jsx)(__1.RaySpinner, { color: layout === 'solid' ? 'light' : color, colorWeight: '100', size: size, rayHeight: 3, rayWidth: 2, inButton: true }, void 0) }), void 0)), isLoading ? ((0, jsx_runtime_1.jsx)("span", { children: loadingLabel }, void 0)) : (label && (0, jsx_runtime_1.jsx)("span", { children: label }, void 0)), !isLoading && IconRight && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div icon-right' }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: IconRight, color: layout === 'solid' ? 'light' : color, size: size }, void 0) }), void 0))] }), void 0));
});
exports.default = Button;
